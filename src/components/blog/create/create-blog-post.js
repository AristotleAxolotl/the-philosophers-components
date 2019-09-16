import { html, css, LitElement } from "lit-element";
import './create-post-body.js';

// TODO: post has a body, comment section, upvote/downvote,
export default class CreatePost extends LitElement {
  static get properties(){
    return {

    }
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

customElements.define('create-blog-post', CreatePost);