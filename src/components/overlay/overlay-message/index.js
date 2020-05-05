/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { utils } from '../../lib';
import { Content } from '../../content';

export class OverlayMessage extends Content {
  static get properties() {
    return {};
  }

  render() {
    return html``;
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
    return css``;
  }
}
