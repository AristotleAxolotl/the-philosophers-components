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

  _createPost(){
    const ele = this.shadowRoot.querySelector('#test');
    console.log(ele);
    let ele2 = ele.shadowRoot.querySelector('#createPost');
    console.log(ele2)
    let ele3 = ele2.querySelector('#mainBody');
    console.log(ele3);
    let ele4 = ele3.querySelector('#inputPostText');
    console.log(ele4);
    console.log(ele4.value);

    console.log(ele);
    ele2 = ele.shadowRoot.querySelector('#extraInfo');
    console.log(ele2)
    ele3 = ele2.querySelector('#resourceLink');
    console.log(ele3);
    ele4 = ele3.querySelector('#resourceInput');
    console.log(ele4);
    console.log(ele4.value);

    console.log(ele);
    ele2 = ele.shadowRoot.querySelector('#extraInfo');
    console.log(ele2)
    ele3 = ele2.querySelector('#dateOfPost');
    console.log(ele3);
    ele4 = ele3.querySelector('#createDate');
    console.log(ele4);
    console.log(ele4.value);

    console.log(ele);
    ele2 = ele.shadowRoot.querySelector('#extraInfo');
    console.log(ele2)
    ele3 = ele2.querySelector('#tags');
    console.log(ele3);
    ele4 = ele3.querySelector('#createTags');
    console.log(ele4);
    console.log(ele4.value);
  }

  // eslint-disable-next-line class-methods-use-this
  _discardPost(){
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
    return css``;
  }
}

// customElements.define('create-blog-post', CreatePost);
