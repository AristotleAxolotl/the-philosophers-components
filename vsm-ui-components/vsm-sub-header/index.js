import { html, css, LitElement } from 'lit-element';

export default class VsmSubHeader extends LitElement {
  static get properties() {
    return {
      small: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      h2 {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-decoration: inherit;
        text-transform: inherit;
        font-size: 1rem;
        line-height: 1.75rem;
        font-weight: 400;
        letter-spacing: 0.009375em;
      }

      h2[small] {
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: 0.0071428571em;
      }
    `;
  }

  constructor() {
    super();
    this.small = false;
  }

  render() {
    return html`
      <h2 ?small=${this.small}>
        <slot>
      </h1>
    `;
  }
}

window.customElements.define('vsm-sub-header', VsmSubHeader);
