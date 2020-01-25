/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { CreatePostBody } from '../post-body';
import { utils } from '../../../lib';

// TODO: post has a body, comment section, upvote/downvote,
export class CreatePost extends LitElement {
  static get properties() {
    return {
      createPost: { type: Function },
    };
  }

  constructor(){
    super();
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
    const postBody = ele3.querySelector('#inputPostText').value;

    const EXTRAINFO = '#extraInfo';

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#resourceLink');
    const resrouceLinks = ele3.querySelector('#resourceInput').value;

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#dateOfPost');
    const postDate = ele3.querySelector('#createDate').getDate();

    ele2 = ele.shadowRoot.querySelector(EXTRAINFO);
    ele3 = ele2.querySelector('#tags');
    const tags = ele3.querySelector('#createTags').getTags();

    const post = {
      PostBody: postBody,
      PostDate: postDate,
      ResourceLinks: resrouceLinks,
      Tags: tags,
    };

    if(!!this.createPost) this.createPost(post);

    return post;
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
