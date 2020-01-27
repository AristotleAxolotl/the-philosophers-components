/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { Image } from '../../image';

import { utils } from '../../lib';
import { Content } from '../../content';

import { CUSTOM_ELEMENT_UPDATED } from '../../../events';

// instead of having the method do the resizing, which seems impossible,
// extract method to be used by classes that use it & override size attributes when creating card. BLEGH.
// OR MAYBE
// have options to render different HTML in this class
// With different classes, and you can set width/size of each class instead(permanently)

// const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

export class OverlayMessage extends Content {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  updated() {
  }
  render() {
    return html`
    `;
  }
  static get element() {
    return 'overlay-message';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(OverlayMessage);
  }

  static get styles() {
    return css`
    `;
  }
}
