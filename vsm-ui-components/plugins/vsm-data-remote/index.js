import { LitElement } from 'lit-element';

import { mix, emitsEvents } from '../../lib';

import { DATA_LOADED } from '../../events';

export default class VsmDataRemote extends mix(LitElement).with(emitsEvents) {
  static get properties() {
    return {
      url: { type: String },
      data: { type: Object },
      params: { type: Object },
      method: { type: String },
      headers: { type: Object },
      loading: { type: Boolean },
      mode: { type: String },
    };
  }

  get emits() {
    return {
      DATA_LOADED,
    };
  }

  constructor() {
    super();

    this.method = 'get';
    this.params = {};
    this.body = {};
    this.loading = false;
    this.mode = 'same-origin';

    this._init = false;
  }

  async updated() {
    if (this._init) this.loadData();
    this._init = true;
  }

  _createUrl(params) {
    const url = new URL(new Request(this.url).url);
    const search = new URLSearchParams(url.search);

    Object.keys(params).map(key => search.set(key, params[key]));

    url.search = search;

    return url;
  }

  _isMethod(method) {
    return this.method.toLowerCase() === method.toLowerCase();
  }

  async loadData() {
    if (!this.url) return;

    let { params } = this;
    if (this._isMethod('get')) {
      params = { ...params, ...this.data };
    }

    const url = this._createUrl(params);

    const response = await fetch(url, {
      method: this.method,
      headers: new Headers(this.headers),
      body: this._isMethod('get') ? undefined : JSON.stringify(this.data),
      mode: this.mode,
      credentials: 'include',
    });

    this.emit(DATA_LOADED, await response.json());
  }
}

window.customElements.define('vsm-data-remote', VsmDataRemote);
