/* eslint-disable import/extensions */
import { css, html, LitElement } from 'lit-element';

import { ThePhilosophersComponents } from '../src/components/tpc';

export class TCPContainer extends LitElement {
  static get styles() {
    return css``;
  }

  static register() {
    ThePhilosophersComponents.register();
    window.customElements.define('tcp-container', TCPContainer);
  }

  render() {
    return html`
      <the-philosophers-components></the-philosophers-components>
    `;
  }
}
