import { LitElement } from 'lit-element';

import { mix, emitsEvents } from '../lib';

export default class VsmProxy extends mix(LitElement).with(emitsEvents) {
  static get properties() {
    return {
      link: { type: String },
      plugin: { type: Boolean },
    };
  }

  init() {
    if (this.scope) {
      this._scope = this.scope.shadowRoot;
    } else if (this.hasAttribute('plugin')) {
      this._scope = (function getParent(node) {
        if (!node.parentNode) return node;
        return getParent(node.parentNode);
      })(this.parentNode);
    } else {
      this._scope = window.document;
    }

    this._proxyElement = this._scope.querySelector(this.getAttribute('link'));
  }

  load() {
    return new Proxy(this._proxyElement, {
      get: (target, key) => {
        if (typeof target[key] === 'function') {
          // eslint-disable-next-line prefer-spread
          return (...args) => this._proxyElement[key].apply(this._proxyElement, args);
        }
        return target[key];
      },
      set: (target, key, value) => {
        // eslint-disable-next-line no-param-reassign
        target[key] = value;
        return true;
      },
    });
  }
}

window.customElements.define('vsm-proxy', VsmProxy);
