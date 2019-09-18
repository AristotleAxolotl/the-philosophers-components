import { html, css, LitElement } from 'lit-element';

export default class VsmHeader extends LitElement {
  static get properties() {
    return {
      level: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-weight: 300;
        text-decoration: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
      }

      h1 {
        font-size: 6rem;
        line-height: 6rem;
        letter-spacing: -0.015625em;
        font-weight: 300;
      }

      h2 {
        font-size: 3.75rem;
        line-height: 3.75rem;
        letter-spacing: -0.0083333333em;
        font-weight: 300;
      }

      h3 {
        font-weight: 400;
        font-size: 3rem;
        line-height: 3.125rem;
        letter-spacing: normal;
      }

      h4 {
        font-size: 2.125rem;
        line-height: 2.5rem;
        letter-spacing: 0.0073529412em;
        font-weight: 400;
      }

      h5 {
        line-height: 2rem;
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: normal;
      }

      h6 {
        line-height: 2rem;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.0125em;
      }
    `;
  }

  constructor() {
    super();
    this.level = 1;
  }

  render() {
    const h = document.createElement(`h${this.level}`);
    h.innerHTML = '<slot>';
    return html`
      ${h}
    `;
  }
}

window.customElements.define('vsm-header', VsmHeader);
