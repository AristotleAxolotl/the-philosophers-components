/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class Card extends LitElement {
  static get properties() {
    return {
      imgSrc: { type: String },
      cardLink: { type: String },
    };
  }

  render() {
    return html`
      <div cardWrapper @click="${() => this.followLink()}">
        <div imageWrapper>
          <img src="${this.imgSrc}" />
        </div>
        <div textWrapper>
          <p text>
            <slot name="cardText"></slot>
          </p>
        </div>
      </div>
    `;
  }

  followLink() {
    window.location = this.cardLink;
  }

  constructor() {
    super();
    this.imgSrc = '../../../resources/axolotl.jpg';
    this.cardLink = 'http://localhost:8000/demo/cardLink';
  }

  static get element() {
    return 'philosophers-card';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(Card);
  }

  static get styles() {
    return css`
      * {
        padding: 1px;
      }

      [cardWrapper] {
        cursor: pointer;
        /* border: 1px solid; */
        box-shadow: 10px 5px 5px grey;
        /* inside shadow */
        /* box-shadow: inset 0 0 10px #000000; */
        border-radius: 10px;
        width: 175px;
        height: 175px;
        margin: 5px;
      }

      [cardWrapper]:hover {
        opacity: 0.7;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      [imageWrapper] {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 167px;
        height: 120px;
      }

      [text] {
        width: 172px;
        height: 33px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-right: 1px solid;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        text-align: center;
      }
    `;
  }
}
