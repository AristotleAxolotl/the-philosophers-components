/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

// instead of having the method do the resizing, which seems impossible,
// extract method to be used by classes that use it & override size attributes when creating card. BLEGH.
// OR MAYBE
// have options to render different HTML in this class
// With different classes, and you can set width/size of each class instead(permanently)

// const widthLimits = ['100', '300', '500', '750', '1000', '1500', '2500'];

export class Loading extends LitElement {
  // constructor() {
  //   super();
  // }

  static get properties() {
    return {};
  }

  render() {
    return html``;
  }

  static get element() {
    return 'philosophers-loading';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(Loading);
  }

  static get styles() {
    return css`
      :host {
        width: 100vw;
        height: 100vh;
      }
    `;
  }
}
