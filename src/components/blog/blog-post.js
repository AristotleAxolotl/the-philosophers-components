import { html, css, LitElement } from "lit-element";
import './post-body.js';

// TODO: post has a body, comment section, upvote/downvote,
export default class Post extends LitElement {
  static get properties(){
    return {

    }
  }

  render() {
    return html`
      <post-body>
        <span slot="mainBodyText">Enter your post text here...</span>
      </post-body>
    `;
  }

  static get styles() {
    return css`

    `;
  }

}

customElements.define('blog-post', Post);