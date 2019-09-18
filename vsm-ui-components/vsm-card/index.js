import { html, css, LitElement } from 'lit-element';

import '../vsm-header';
import '../vsm-sub-header';
import '../vsm-para';

export default class VsmCard extends LitElement {
  static get properties() {
    return {
      image: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border-radius: 4px;
        background-color: var(--vsm-card-background, #fff);
        -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
          0 1px 3px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
          0 1px 3px 0 rgba(0, 0, 0, 0.12);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
      }

      :host div:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }

      :host [primary-action] [image] {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        position: relative;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
        height: 150px;
        filter: var(--vsm-card-image-filter);
      }

      :host [primary-action] [image]:before {
        display: block;
        content: '';
      }

      :host [primary] {
        padding-left: 1rem;
      }

      :host [secondary] {
        padding: 0 1rem 8px;
        color: rgba(0, 0, 0, 0.54);
      }
    `;
  }

  _renderImage() {
    if (!this.image) return '';
    return html`
      <div primary-action>
        <div image style="background-image: url(${this.image})"></div>
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderImage()}
      <div primary>
        <slot name="header"></slot>
        <slot name="sub-header"></slot>
      </div>
      <div secondary>
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('vsm-card', VsmCard);
