/* eslint-disable import/extensions */
import { css, html, LitElement } from 'lit-element';

import { ThePhilosophersComponents } from '../src/components/tcp';

import { CreatePost } from '../src/components/tcp-blog/create';

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
      <create-post></create-post>
    `;
  }
}
