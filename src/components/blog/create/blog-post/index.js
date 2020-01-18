/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { CreatePostBody } from '../post-body';
import { utils } from '../../../lib';

// TODO: post has a body, comment section, upvote/downvote,
export class CreatePost extends LitElement {
  static get properties() {
    return {};
  }

  static get element() {
    return 'create-blog-post';
  }

  static get dependencies() {
    return [CreatePostBody];
  }

  static register() {
    utils.register(CreatePost);
  }

  // TODO: One day this will be a call to db
  _createPost() {
    const ele = this.shadowRoot.querySelector('#test');
    let ele2 = ele.shadowRoot.querySelector('#createPost');
    let ele3 = ele2.querySelector('#mainBody');
    let ele4 = ele3.querySelector('#inputPostText');
    console.log('Post Text: ', ele4);

    const EXTRAINFO = '#extraInfo';

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#resourceLink');
    ele4 = ele3.querySelector('#resourceInput');
    console.log('Resource Link: ', ele4);

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#dateOfPost');
    ele4 = ele3.querySelector('#createDate');
    console.log('Post Date: ', ele4);

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#tags');
    ele4 = ele3.querySelector('#createTags');
    console.log('Post Tags: ', ele4);
  }

  // eslint-disable-next-line class-methods-use-this
  _discardPost() {
    window.location.reload(false);
  }

  render() {
    return html`
      <create-post-body id="test">
        <!-- <span slot="mainBodyText">Enter your post text here...</span> -->
      </create-post-body>
      <button @click=${() => this._createPost()}>Create</button>
      <button @click=${() => this._discardPost()}>Discard</button>
    `;
  }

  static get styles() {
    return css`
      * {
        margin: 5px;
      }
    `;
  }
}
