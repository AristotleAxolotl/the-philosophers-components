import { html, css, LitElement } from 'lit-element';

export default class VsmButton extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --vsm-button-primary: rgb(0, 150, 255);
        --vsm-button-primary-hover: rgb(0, 160, 255);
      }

      button {
        color: var(--vsm-button-primary);
        font-family: Roboto, sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.0892857143em;
        text-transform: uppercase;
        text-decoration: none;
        will-change: transform, opacity;
        padding: 0 8px;
        box-sizing: border-box;
        min-width: 64px;
        height: 36px;
        border: none;
        outline: none;
        user-select: none;
        overflow: hidden;
        vertical-align: middle;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        background-color: transparent;
      }

      button:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }

      button.raised {
        color: #fff;
        background-color: var(--vsm-button-primary);
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12);
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1),
          background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 0 16px;
      }

      button.raised:hover {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12);
        background-color: var(--vsm-button-primary-hover);
      }

      button.outlined {
        border-color: var(--vsm-button-primary);
        border-style: solid;
        padding: 0 14px;
        border-width: 2px;
      }
    `;
  }

  constructor() {
    super();
    this.label = 'Label';
    this.type = 'text';
  }

  render() {
    return html`
      <button class="${this.type}">${this.label}</button>
    `;
  }
}

window.customElements.define('vsm-button', VsmButton);
