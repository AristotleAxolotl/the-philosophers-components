/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { ImageCss } from '../../image';

import { utils } from '../../lib';
import { Content } from '../../content';

import { CUSTOM_ELEMENT_UPDATED } from '../../../events';

// instead of having the method do the resizing, which seems impossible,
// extract method to be used by classes that use it & override size attributes when creating card. BLEGH.
// OR MAYBE
// have options to render different HTML in this class
// With different classes, and you can set width/size of each class instead(permanently)

// const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

export class ImageCard extends Content {
  static get properties() {
    return {
      imgSrc: { type: String },
      cardText: { type: String },
      cardLink: { type: String },
      cardWidth: { type: String },
      cardHeight: { type: String },
    };
  }

  constructor() {
    super();
    this.imgSrc = '../../../assets/images/axolotl.jpg';
    this.cardLink = 'http://localhost:8000/demo/cardLink';
    this.cardWidth = '200px';
    this.cardHeight = '200px';
    this._loaded = false;
  }

  updated() {
    this.shadowRoot.querySelector('[cardWrapper]').style.width = this.cardWidth;
    this.shadowRoot.querySelector('[cardWrapper]').style.height = this.cardHeight;
    if (!this._loaded) this._loaded = true;
    this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_UPDATED);
  }

  // setCardWidth(width){
  //   this.shadowRoot.querySelector('[cardWrapper]').style.width = width;
  // }

  // setCardHeight(height){
  //   this.shadowRoot.querySelector('[cardWrapper]').style.height = height;
  // }

  render() {
    return html`
      <div content cardWrapper @click="${() => this._followLink()}">
        <div imageWrapper>
          <philosophers-image-css image imgSrc="${this.imgSrc}"></philosophers-image-css>
        </div>
        <div textWrapper>
          <p text>
            <slot name="cardText">${this.cardText}</slot>
          </p>
        </div>
      </div>
    `;
  }

  _followLink() {
    window.location = this.cardLink;
  }

  static get element() {
    return 'philosophers-image-card';
  }

  static get dependencies() {
    return [ImageCss];
  }

  static register() {
    utils.register(ImageCard);
  }

  static get styles() {
    return css`
      [cardWrapper] {
        display: block;
        cursor: pointer;
        box-shadow: 10px 5px 5px #1f2833;
        /* inside shadow */
        /* box-shadow: inset 0 0 10px #000000; */
        border-radius: 10px;
      }

      [cardWrapper]:hover {
        opacity: 0.7;
      }

      [imageWrapper] {
        display: block;
        height: 63%;
        width: 100%;
        border-radius: 10px;
        overflow: auto;
      }

      [textWrapper] {
        display: block;
        height: 27%;
        width: 100%;
      }

      [text] {
        text-align: center;
        padding: 10px 0;
        color: #c5c6c7;
      }
    `;
  }
}
