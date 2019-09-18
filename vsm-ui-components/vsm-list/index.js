import { html, css, LitElement } from 'lit-element';

export default class VsmList extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('vsm-list', VsmList);
