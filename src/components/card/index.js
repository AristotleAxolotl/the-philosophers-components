/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { Image } from '../image';

import { utils } from '../lib';
import { Content } from '../content';

import { CUSTOM_ELEMENT_LOADED } from '../../events';

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
    // split out into seperate
    this.cardSize = { width: '200px', height: '200px' };
    this._loaded = false;
  }

  updated() {
    this.shadowRoot.querySelector('[cardWrapper]').style.width = this.cardSize.width;
    this.shadowRoot.querySelector('[cardWrapper]').style.height = this.cardSize.height;
  }

  static get properties() {
    return {
      imgSrc: { type: String },
      cardLink: { type: String },
      cardSize: { type: Object },
      _loaded: { type: Boolean },
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

  connectedCallback() {
    super.connectedCallback();

    // TODO: Resize listeners should probably be in the parent class (i.e. infini-scroller)

    // window.addEventListener('resize', () => {
    //   this._loaded = true;
    // });

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded, philosophers-card');
      this._loaded = true;
      this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });
  }

  disconnectedCallback() {
    // window.removeEventListener('resize', () => {
    //   this._loaded = false;
    // });

    document.removeEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded - remove EventListener');
      // this._loaded = false;
      // this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });

    super.disconnectedCallback();
  }
}
