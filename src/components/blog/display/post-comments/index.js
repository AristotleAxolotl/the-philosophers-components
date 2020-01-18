/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../../lib';

// TODO: evaluate the responsibility of each class & update tests

// TODO: create comments section. comments can be replied to, etc. like reddit.
// TODO: Each comment is indented
export class PostComments extends LitElement {
  static get properties() {
    return {
      postBody: {
        type: String,
      },
      isCreatePost: {
        type: Boolean,
      },
      resourceLink: {
        type: String,
      },
    };
  }
  // static get dependencies() {

  // }

  static get element() {
    return 'post-comments';
  }

  static register() {
    utils.register(PostComments);
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

// customElements.define('post-comments', PostComments);
