import { html, css, LitElement } from 'lit-element';

// TODO: create comments section. comments can be replied to, etc. like reddit.
// TODO: Each comment is indented
export default class PostComments extends LitElement {
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

  render() {
    return html`

    `;
  }

  static get styles() {
    return css`

    `;
  }

  // constructor() {
  //   super();
  // }
}

customElements.define('post-comments', PostComments);
