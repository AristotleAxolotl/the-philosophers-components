import { LitElement } from 'lit-element';

export default class VsmDataPoll extends LitElement {
  static get properties() {
    return {
      poll: { type: Number },
      enabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.poll = 3;
    this.enabled = true;
  }

  init(dataElement) {
    this._dataElement = dataElement;
  }

  async _doPoll() {
    await this._dataElement.executeHook('loadData');
    if (!this.enabled) return;
    setTimeout(() => this._doPoll(), this.poll * 1000);
  }

  updated(changed) {
    if (changed.has('enabled') && this.enabled) {
      this._doPoll();
    }
  }
}

window.customElements.define('vsm-data-poll', VsmDataPoll);
