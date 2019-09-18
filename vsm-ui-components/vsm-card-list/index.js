import { html, css, LitElement } from 'lit-element';

export default class VsmCardList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
      }

      ::slotted(vsm-card) {
        margin: 0 var(--vsm-card-list-margin, 10px) var(--vsm-card-list-margin, 10px) 0;
        width: var(--vsm-card-list-width, 400px);
        height: var(--vsm-card-list-width, 200px);
        flex-grow: 0;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('vsm-card-list', VsmCardList);
