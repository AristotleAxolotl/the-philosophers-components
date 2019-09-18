import { LitElement } from 'lit-element';

export default class VsmDataSort extends LitElement {
  static get properties() {
    return {
      sortBy: { type: String },
      descending: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.sortBy = '';
    this.descending = false;
  }

  _comparator() {
    return (a, b) => a[this.sortBy] - b[this.sortBy];
  }

  set comparator(func) {
    if (typeof func !== 'function') throw new TypeError('Comparator must be a function.');
    this._comparator = func;
  }

  get comparator() {
    return this._comparator(this.sortBy);
  }

  preLoadData(data) {
    const sortedData = [...data].sort(this.comparator);
    return this.descending ? sortedData.reverse() : sortedData;
  }
}

window.customElements.define('vsm-data-sort', VsmDataSort);
