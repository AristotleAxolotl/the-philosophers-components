/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { PostBody } from '../tcp-post-body';
import { utils } from '../../../lib';

// TODO: post has a body, comment section, upvote/downvote,
export class Post extends LitElement {
  static get properties() {
    return {};
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
        <span slot="mainBodyText">[Example Post Text]</span>
      </post-body>
    `;
  }

  static get styles() {
    return css``;
  }
}

// customElements.define('blog-post', Post);
