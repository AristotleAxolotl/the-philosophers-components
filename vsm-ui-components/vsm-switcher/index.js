import { css, html, LitElement } from 'lit-element';

import { mix, emitsEvents } from '../lib';

import { SWITCHED } from '../events';

export default class VsmSwitcher extends mix(LitElement).with(emitsEvents) {
  static get properties() {
    return {
      idAttr: { type: String },
    };
  }

  static get styles() {
    return css`
      ::slotted([switchable]) {
        position: absolute;
        box-sizing: border-box;
        transition: opacity 0.5s;
        opacity: 0;
        width: var(--vsm-switcher-content-width);
        min-height: var(--vsm-switcher-content-height);
      }

      ::slotted([switchable][selected]) {
        opacity: 1;
      }
    `;
  }

  get emits() {
    return {
      SWITCHED,
    };
  }

  constructor() {
    super();
    this.idAttr = 'id';
    this._selected = null;
  }

  switch(id) {
    if (id.detail) {
      this.switch(id.detail.id);
      return;
    }

    if (this._selected === id) return;

    this._selected = id;
    this.querySelectorAll('[switchable]').forEach(switchable => {
      const eleId = switchable.getAttribute(this.idAttr);
      if (!eleId) return;

      if (eleId === id) {
        switchable.setAttribute('selected', 'selected');
        this.emit(SWITCHED, {
          id: this._selected,
          element: switchable,
        });
      } else {
        switchable.removeAttribute('selected');
      }
    });
  }

  firstUpdated() {
    const selected = this.querySelector('[switchable][selected]');
    if (!selected) return;
    const eleId = selected.getAttribute(this.idAttr);
    this.switch(eleId);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('vsm-switcher', VsmSwitcher);
