import { html, LitElement } from 'lit-element';

import { mix, emitsEvents } from '../lib';

import { SELECTED, CHANGE } from '../events';

export default class VsmSelector extends mix(LitElement).with(emitsEvents) {
  static get properties() {
    return {
      idAttr: { type: String },
      _selected: { type: String },
    };
  }

  get emits() {
    return {
      SELECTED,
      CHANGE,
    };
  }

  constructor() {
    super();
    this.idAttr = 'id';
  }

  get selected() {
    return this._selected;
  }

  set selected(id) {
    let changed = false;
    if (this._selected !== id) changed = true;
    this._selected = id;
    this._selectElement();
    this.emit(SELECTED, {
      id: this._selected,
      element: this.querySelector(`[${this.idAttr}="${this._selected}"]`),
    });
    if (changed)
      this.emit(CHANGE, {
        id: this._selected,
        element: this.querySelector(`[${this.idAttr}="${this._selected}"]`),
      });
  }

  _selectElement() {
    this.querySelectorAll('[selectable]').forEach(selectable => {
      const eleId = selectable.getAttribute(this.idAttr);
      if (!eleId) return;
      if (eleId === this._selected) {
        selectable.setAttribute('selected', 'selected');
      } else {
        selectable.removeAttribute('selected');
      }
    });
  }

  firstUpdated() {
    let preSelected;
    this.querySelectorAll('[selectable]').forEach(selectable => {
      if (selectable.hasAttribute('selected')) preSelected = selectable;
      selectable.addEventListener('click', e => {
        if (e.target.selected) return;
        const id = e.target.getAttribute(this.idAttr);
        if (!id) return;
        this.selected = id;
      });
    });
    if (preSelected) this._selected = preSelected.getAttribute(this.idAttr);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('vsm-selector', VsmSelector);
