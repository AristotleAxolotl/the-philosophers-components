/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../../lib';

export class ImageHtml extends LitElement {
  constructor() {
    super();
    this.imgSrc = '../../../assets/images/axolotl.jpg';
  }

  static get properties() {
    return {
      imgSrc: { type: String },
    };
  }

  updated() {
    this.style.backgroundImage = `url('${this.imgSrc}')`;
  }

  static get element() {
    return 'philosophers-image-html';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(ImageHtml);
  }

  static get styles() {
    return css`
      :host {
      }
      img {
        width: 100%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <!-- <div image-container> -->
      <img src=${this.imgSrc} />
      <!-- </div> -->
    `;
  }
}
