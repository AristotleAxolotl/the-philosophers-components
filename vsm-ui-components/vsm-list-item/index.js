import { html, css, LitElement } from 'lit-element';

export default class VsmListItem extends LitElement {
  static get properties() {
    return {
      image: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      [item] {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
      }
      [icon] {
        height: 64px;
        width: 64px;
        background: white;
        border-radius: 50%;
        margin-right: 20px;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12);
        border: 2px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        flex-grow: 0;
        flex-shrink: 0;
      }

      [icon] [image] {
        opacity: 0.9;
        height: 100%;
        width: 100%;
        background-size: 70%;
      }

      [content] {
        margin-top: 8px;
        flex-grow: 1;
        flex-shrink: 1;
      }
      ::slotted(vsm-header) {
        margin-bottom: 5px;
      }
    `;
  }

  _renderImage() {
    if (!this.image) return '';
    return html`
      <div icon><vsm-icon image="${this.image}"></vsm-icon></div>
    `;
  }

  render() {
    return html`
      <div item>
        ${this._renderImage()}
        <div content><slot></slot></div>
      </div>
    `;
  }
}

window.customElements.define('vsm-list-item', VsmListItem);
