// TODO: normal stuff; upvote/downvote, share, link, etc.
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../../lib';

export class PostUtilitiesBar extends LitElement {
  static get properties() {
    return {};
  }

  // static get dependencies() {

  // }

  static get element() {
    return 'post-utilities-bar';
  }

  static register() {
    utils.register(PostUtilitiesBar);
  }

  render() {
    return html``;
  }

  static get styles() {
    return css`
      * {
        margin: 5px;
      }
    `;
  }

  // constructor() {
  //   super();
  // }
}

// customElements.define('post-tags', Post);
