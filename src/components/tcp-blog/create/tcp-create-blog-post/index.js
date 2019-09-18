/* eslint-disable import/extensions */
import { html, css, LitElement } from "lit-element";
import { CreatePostBody } from "../tcp-create-post-body";
import { utils } from "../../../lib";

// TODO: post has a body, comment section, upvote/downvote,
export class CreatePost extends LitElement {
  static get properties(){
    return {

    }
  }

  static get dependencies() {
    return [CreatePostBody];
  }

  static register() {
    utils.register(CreatePost);
  }

  render() {
    return html`
      <create-post-body>
        <span slot="mainBodyText">Enter your post text here...</span>
      </create-post-body>
    `;
  }

  static get styles() {
    return css`

    `;
  }

}

// customElements.define('create-blog-post', CreatePost);