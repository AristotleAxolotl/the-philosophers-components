/* eslint-disable import/extensions */
import { css, html, LitElement } from 'lit-element';

import { ThePhilosophersComponents } from '../src/components/tpc';

import { CreatePost } from '../src/components/blog/create';

export class TCPContainer extends LitElement {
  static get styles() {
    return css``;
  }

  static register() {
    ThePhilosophersComponents.register();
    CreatePost.register();
    window.customElements.define('tcp-container', TCPContainer);
  }

  render() {
    return html`
      <the-philosophers-components></the-philosophers-components>
    `;
  }
}
