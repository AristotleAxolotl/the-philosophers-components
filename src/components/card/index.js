/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, unsafeCSS, LitElement } from 'lit-element';

import { utils } from '../lib';

// instead of having the method do the resizing, which seems impossible,
// extract method to be used by classes that use it & override size attributes when creating card. BLEGH.
// OR MAYBE
// have options to render different HTML in this class
// With different classes, and you can set width/size of each class instead(permanently)

// const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

export class Card extends LitElement {
  constructor() {
    super();
    this.imgSrc = '../../../resources/axolotl.jpg';
    this.cardLink = 'http://localhost:8000/demo/cardLink';
    this.imgWidth = css `:host {width: 200px}`;
    this.imgHeight = "150px";
    this.cardType = "medium";
    // this.shadowRoot.getElementById('cardWrapper').childNodes.forEach(element => this._editWidth(element));
  }

  // firstUpdated() {
  //   const ele = this.shadowRoot.querySelector('#cardWrapper');
  //   const ele2 = ele.querySelector('#imageWrapper');
  //   const ele3 = ele2.querySelector('#image');

  //   const img = new Image();
  //   img.src = ele3.src;
  //   this._editWidth(img);
  // }

  static get properties() {
    return {
      imgSrc: { type: String },
      cardLink: { type: String },
      cardType: { type: String },
      // sizeLimits: { type: Array },
    };
  }

  render() {
    return html`
      ${this._renderDifferentSizes()}
    `;
  }

  _renderDifferentSizes(){
    // check type
    // if no type then render based on best guess
    switch(this.cardType) {
      case 'small':
          return html`
        <div cardWrapper small id="cardWrapper" @click="${() => this._followLink()}">
          <div imageWrapper id="imageWrapper">
            <img id="image" src="${this.imgSrc}"/>
          </div>
          <div textWrapper id="textWrapper">
            <p text>
              <slot name="cardText"></slot>
            </p>
          </div>
        </div>`;
      case 'medium':
        return html`
      <div cardWrapper medium id="cardWrapper" @click="${() => this._followLink()}">
        <div imageWrapper id="imageWrapper">
          <img id="image" src="${this.imgSrc}"/>
        </div>
        <div textWrapper id="textWrapper">
          <p text>
            <slot name="cardText"></slot>
          </p>
        </div>
      </div>`;
      case 'large':
          return html`
        <div cardWrapper large id="cardWrapper" @click="${() => this._followLink()}">
          <div imageWrapper id="imageWrapper">
            <img id="image" src="${this.imgSrc}"/>
          </div>
          <div textWrapper id="textWrapper">
            <p text>
              <slot name="cardText"></slot>
            </p>
          </div>
        </div>`;
      default:
        console.log('CARD did not have a type. PLease give me a type...');
        break;
    }
  }

  _followLink() {
    window.location = this.cardLink;
  }

  // eslint-disable-next-line class-methods-use-this
  // _editWidth(img) {
  //   // console.log(element);
  //   // console.log(element.textWrapper.text);
  //   let {height} = img;
  //   let {width} = img;

  //   console.log("Image width: ", this.imgSizes, typeof this.imgSizes);

  //   // const widthLimits = ['100', '300', '500'];
  //   // const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

  //   const maxWidth = this._getClosestNumber(widthLimits, img.width);

  //   // Check if the current width is larger than the max
  //   if (width > maxWidth) {
  //     const ratio = maxWidth / width; // get ratio for scaling image
  //     const card = this.shadowRoot.querySelector('#cardWrapper');
  //     // card.setAttribute("style", `* { width: ${this.maxWidth}px; }`); // Set new width
  //     // card.style.width = `${this.maxWidth}px`;
  //     console.log("New width should be ", maxWidth);
  //     // this.shadowRoot.querySelector('#cardWrapper').setAttribute("style", `height: ${this.height * this.ratio}`); // Scale height based on ratio
  //     height *= ratio; // Reset height to match scaled image
  //     width *= ratio; // Reset width to match scaled image
  //     console.log(this.shadowRoot.querySelector('#cardWrapper').offsetWidth);
  //   }

  //   // // Check if current height is larger than max
  //   // if (height > maxHeight) {
  //   //   ratio = maxHeight / height; // get ratio for scaling image
  //   //   $(this).css('height', maxHeight); // Set new height
  //   //   $(this).css('width', width * ratio); // Scale width based on ratio
  //   //   width = width * ratio; // Reset width to match scaled image
  //   //   height = height * ratio; // Reset height to match scaled image
  //   // }
  // }

  // eslint-disable-next-line class-methods-use-this
  _getClosestNumber(array, target) {
    return array.reduce((previous, current) => Math.abs(current - target) < Math.abs(previous - target) ? current : previous);
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
      /* * {
        margin: 5px;
      } */

      /* :host {
        --element-width: 200px;
        --element-height: 150px;
      } */

      [cardWrapper] {
        display: block;
        cursor: pointer;
        /* border: 1px solid; */
        box-shadow: 10px 5px 5px #1f2833;
        /* inside shadow */
        /* box-shadow: inset 0 0 10px #000000; */
        border-radius: 10px;
      }

      [cardWrapper]:hover {
        opacity: 0.7;
      }

      img {
        /* display: inline-block; */
        width: 100%;
        height: 100%;
        border-radius: 10px;
/* display: block;
margin: auto; */
      }

      [imageWrapper] {
        /* display: inline-block; */
        /* margin-left: auto; */
        /* margin-right: auto; */
        height: 100%;
        width: 100%;
        /* width: 167px; */
        /* height: 120px; */
      }

      [text] {
        height: 100%;
        width: 100%;
        /* width: 172px; */
        /* height: 33px; */
        /* border-top: 1px solid #66fcf1; */
        /* border-bottom: 1px solid #66fcf1; */
        /* border-right: 1px solid #66fcf1; */
        /* border-bottom-right-radius: 10px; */
        /* border-bottom-left-radius: 10px; */
        text-align: center;
        padding: 10px 0;
        color: #c5c6c7;
      }

      [small] {
        width: 200px;
      }
      [medium] {
        width: 500px;
      }
      [large] {
        width: 1000px;
      }
    `;
  }
}
