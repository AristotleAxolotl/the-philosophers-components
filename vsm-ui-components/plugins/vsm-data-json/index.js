import { LitElement } from 'lit-element';
import { mix, emitsEvents } from '../../lib';

import { DATA_LOADED } from '../../events';

export default class VsmDataJson extends mix(LitElement).with(emitsEvents) {
  get emits() {
    return {
      DATA_LOADED,
    };
  }

  async loadData() {
    const data = this.querySelector('script[data]');
    if (!data) return;
    this.emit(DATA_LOADED, JSON.parse(data.innerText));
  }
}

window.customElements.define('vsm-data-json', VsmDataJson);
