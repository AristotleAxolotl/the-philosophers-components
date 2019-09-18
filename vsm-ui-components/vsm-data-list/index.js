import { html, LitElement } from 'lit-element';
import { render } from 'lit-html';

import { mix, pluggable, utils } from '../lib';

import { DATA_LOADED } from '../events';

export default class VsmDataList extends mix(LitElement).with(pluggable) {
  static get properties() {
    return {
      idField: { type: String },
      _data: { type: Array },
    };
  }

  setData(data) {
    if (data == null || typeof data === 'string' || typeof data[Symbol.iterator] !== 'function') {
      throw new TypeError('data must be Iterable (and not a string)');
    }
    this._data = this.executeAllHooks('preLoadData', [...Array.from(data)]);
  }

  getData() {
    return [...this._data];
  }

  constructor() {
    super();
    this._data = [];
    this.idField = 'id';
  }

  // eslint-disable-next-line class-methods-use-this
  itemClick() {}

  // eslint-disable-next-line class-methods-use-this
  itemRenderer(item) {
    return html`
      <div>${JSON.stringify(item)}</div>
    `;
  }

  _renderItem(itemData) {
    const itemContainer = document.createElement('div');
    render(this.itemRenderer(itemData), itemContainer);
    const item = itemContainer.firstElementChild;
    const itemId = itemData[this.idField] ? itemData[this.idField] : '';
    item.setAttribute('item', itemId);
    item.addEventListener('click', this.itemClick);
    return item;
  }

  _renderData() {
    if (!this._wrapper) return '';

    this._wrapper.innerHTML = '';

    this._data.forEach(item => {
      this._wrapper.appendChild(this._renderItem(item));
    });

    return this._wrapper;
  }

  firstUpdated() {
    super.firstUpdated();

    this.bindToPlugin(DATA_LOADED, e => {
      this.setData(e.detail);
    });

    this._wrapper =
      utils.getDirectDecendants(this, '[wrapper]').pop() || document.createElement('div');

    this.executeHook('loadData');
  }

  render() {
    return html`
      ${this._renderData()}
    `;
  }
}

window.customElements.define('vsm-data-list', VsmDataList);
