import { html, css, LitElement } from 'lit-element';

export default class VsmPara extends LitElement {
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

      p {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: 0.03125em;
        text-decoration: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
      }

      p[small] {
        line-height: 1.25rem;
        font-size: 0.875rem;
        letter-spacing: 0.0178571429em;
      }
    `;
  }

  constructor() {
    super();
    this.small = false;
  }

  render() {
    return html`
      <p ?small=${this.small}>
        <slot>
      </p>
    `;
  }
}

window.customElements.define('vsm-para', VsmPara);
