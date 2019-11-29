/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { Image } from '../image';

import { utils } from '../lib';
import { Content } from '../content';

// instead of having the method do the resizing, which seems impossible,
// extract method to be used by classes that use it & override size attributes when creating card. BLEGH.
// OR MAYBE
// have options to render different HTML in this class
// With different classes, and you can set width/size of each class instead(permanently)

// const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

export class Card extends Content {
  constructor() {
    super();
    this.imgSrc = '../../../resources/axolotl.jpg';
    this.cardLink = 'http://localhost:8000/demo/cardLink';
    this.cardType = 'medium';
    // split out into seperate
    this.cardSize = { width: '200px', height: '200px' };
  }

  updated() {
    this.shadowRoot.querySelector('[cardWrapper]').style.width = this.cardSize.width;
    this.shadowRoot.querySelector('[cardWrapper]').style.height = this.cardSize.height;
  }

  static get properties() {
    return {
      imgSrc: { type: String },
      cardLink: { type: String },
      cardType: { type: String },
      cardSize: { type: Object },
    };
  }

  render() {
    return html`
      <div content cardWrapper @click="${() => this._followLink()}">
        <div imageWrapper>
          <philosophers-image image imgSrc="${this.imgSrc}"></philosophers-image>
        </div>
        <div textWrapper>
          <p text>
            <slot name="cardText"></slot>
          </p>
        </div>
      </div>
    `;
  }

  async getContentHeight() {
    console.log('getting height');
    console.log(this.shadowRoot);
    // could be null as need to await?
    console.log(this.shadowRoot.querySelector('[content]'));
    console.log(this.cardSize);
    // console.log(this.shadowRoot.querySelector('[content]').getBoundingClientRect().height);
    return this.cardSize.height;
  }

  async getContentWidth() {
    console.log('getting width');
    return this.cardSize.width;
  }

  _followLink() {
    window.location = this.cardLink;
  }

  static get element() {
    return 'philosophers-card';
  }

  static get dependencies() {
    return [Image];
  }

  static register() {
    utils.register(Card);
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
