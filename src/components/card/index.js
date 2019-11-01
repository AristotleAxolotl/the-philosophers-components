/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class Card extends LitElement {
  static get properties() {
    return {
      imgSrc: { type: String },
    };
  }

  render() {
    return html`
      <div cardWrapper>
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

  constructor() {
    super();
    this.imgSrc = '../../../resources/axolotl.jpg';
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
      [cardWrapper] {
        border: 1px solid;
        border-radius: 10px;
        width: 11vw;
        height: 15vh;
        padding: 2px;
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
        width: 10vw;
        height: 10vh;
      }

      [text] {
        width: 11vw;
        height: 2vh;
        border-top: 1px solid;
        text-align: center;
      }
    `;
  }
}
