/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class Image extends LitElement {
  constructor() {
    super();
    this.imgSrc = '../../../resources/axolotl.jpg';
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
    return 'philosophers-image';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(Image);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
        background-position: center top;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: transparent;
      }
    `;
  }
}
