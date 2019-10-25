/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { PostBody } from '../post-body';
import { utils } from '../../../lib';

// TODO: post has a body, comment section, upvote/downvote,
export class Post extends LitElement {
  static get properties() {
    return {
      postBody: { type: String },
    };
  }

  static get element() {
    return 'blog-post';
  }

  static get dependencies() {
    return [PostBody];
  }

  static register() {
    utils.register(Post);
  }

  render() {
    return html`
      <post-body>
        <span slot="mainBodyText">${this.postBody}</span>
      </post-body>
    `;
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.postBody = '[Example Post Text]';
  }
}

// customElements.define('blog-post', Post);
