/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../lib';

// import { CUSTOM_ELEMENT_LOADED, CUSTOM_ELEMENT_UPDATED } from '../../events';

export class Content extends LitElement {
  static get properties() {
    return {
      _loaded: { type: String },
    };
  }

  constructor() {
    super();
    this._loaded = false;
  }

  static get element() {
    return 'philosphers-content';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(Content);
  }

  updated() {
    // this._loaded = true;
    // this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_UPDATED);
  }

  render() {
    return html``;
  }

  async getContentHeight() {
    if (!this._loaded) {
      console.log('Please wait for the element to load before requesting Height');
      return null;
    }
    const content = this.shadowRoot.querySelector('[content]');
    return content.clientHeight;
  }

  async getContentWidth() {
    if (!this._loaded) {
      console.log('Please wait for the element to load before requesting Width.');
      return null;
    }
    const content = this.shadowRoot.querySelector('[content]');
    return content.clientWidth;
  }

  static get styles() {
    return css``;
  }
}
