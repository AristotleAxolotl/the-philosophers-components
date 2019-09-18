import { LitElement } from 'lit-element';

import { mix, pluggable, emitsEvents } from '../lib';

import { DATA_LOADED } from '../events';

export default class VsmData extends mix(LitElement).with(pluggable, emitsEvents) {
  static get properties() {
    return {
      noAuto: { type: Boolean },
    };
  }

  get emits() {
    return {
      DATA_LOADED,
    };
  }

  firstUpdated() {
    super.firstUpdated();

    this.bindToPlugin(DATA_LOADED, e => {
      if (e.detail != null && typeof e.detail[Symbol.iterator] === 'function') {
        return this.emit(DATA_LOADED, this.executeAllHooks('preLoadData', [...e.detail]));
      }
      if (typeof e.detail === 'object') {
        return this.emit(DATA_LOADED, this.executeAllHooks('preLoadData', { ...e.detail }));
      }
      if (e.detail == null) return null;

      throw new Error(`VSM Data given an unsupported value of: "${e.detail}"`);
    });

    if (this.noAuto) return;

    this.loadData();
  }

  async loadData() {
    return this.executeHook('loadData');
  }
}

window.customElements.define('vsm-data', VsmData);
