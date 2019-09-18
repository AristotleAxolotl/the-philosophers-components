import { html, css, LitElement } from 'lit-element';

import '../vsm-icon';

export default class VsmImageButton extends LitElement {
  static get properties() {
    return {
      selected: { type: Boolean },
      label: { type: String },
      image: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --button-size: 132px;

        --base-background: white;
        --base-border: 8px solid rgba(0, 0, 0, 0.1);
        --base-text-color: rgba(0, 0, 0, 0.81);

        --hover-border: 4px solid rgba(0, 125, 230, 0.2);
        --hover-background: rgba(0, 125, 230, 0.2);
        --hover-text-color: rgb(0, 150, 255);

        --selected-border: 4px solid rgba(0, 0, 0, 0.3);
        --selected-background: rgba(0, 125, 230, 1);
        --selected-text-color: rgb(0, 150, 255);

        --transition-time: 0.4s;
        cursor: pointer;
        display: block;
      }

      [button] {
        width: var(--button-size);
      }

      [circle] {
        height: var(--button-size);
        width: var(--button-size);
        background-color: var(--base-background);
        border-radius: 50%;
        box-sizing: border-box;
        border: var(--base-border);
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12);
        transition: border var(--transition-time) cubic-bezier(0.4, 0, 0.2, 1),
          background-color var(--transition-time) cubic-bezier(0.4, 0, 0.2, 1),
          box-shadow var(--transition-time) cubic-bezier(0.4, 0, 0.2, 1);
      }

      [image] {
        opacity: 0.85;
        border-radius: 50%;
        transition: filter var(--transition-time), opacity var(--transition-time);
      }

      [label] {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.03125em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: center;
        color: var(--base-text-color);
        transition: color var(--transition-time);
      }

      [button]:hover [circle] {
        border: var(--hover-border);
        background-color: var(--hover-background);
      }

      [button]:hover [label] {
        color: var(--hover-text-color);
      }

      [button][selected] [image] {
        filter: invert(1);
      }

      [button][selected] [circle] {
        border: var(--selected-border);
        background-color: var(--selected-background);
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      [button][selected] [label] {
        font-weight: 800;
        color: var(--selected-text-color);
      }
    `;
  }

  constructor() {
    super();
    this.selected = false;
    this.label = 'Label';
    this.image = 'model';
  }

  render() {
    return html`
      <div button ?selected=${this.selected}>
        <div circle>
          <vsm-icon image="${this.image}"></vsm-icon>
        </div>
        <vsm-para label>${this.label}</vsm-para>
      </div>
    `;
  }
}

window.customElements.define('vsm-image-button', VsmImageButton);
