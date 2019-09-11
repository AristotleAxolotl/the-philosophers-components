import { html, css, LitElement } from 'lit-element';
import '../philosophers-date.js';
import './post-tags.js';

// post body has a main body (text), link to resource, date resource added, technology involved tags,
// TODO: buttons to submit/save for later/cancel
// TODO: Should refactor all code to not display two components (create/view ARE different & should have different classes.)
export default class PostBody extends LitElement {
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
      ${this._displayPostType()}
    `;
  }

  // TODO: create should be wrapped in form
  _displayPostType() {
    if (this.isCreatePost) {
      return html`
        <div createPost>
          <div mainBody>
            <textarea inputPostText rows="7" placeholder=${this.postBody}></textarea>
          </div>
          <div extraInfo>
            <div resourceLink>
              <p subtitle>Resource Link:</p>
              <input type="text" placeholder="Enter resource link here..." />
            </div>
            <div dateOfPost>
              <p subtitle>Date of post:</p>
              <philosophers-date ?isCreateDate="${this.isCreatePost}"></philosophers-date>
            </div>
            <div tags>
              <p subtitle>Tags:</p>
              <post-tags ?iscreatepost="${this.isCreatePost}"></post-tags>
            </div>
          </div>
        </div>
      `;
    }
    return html`
      <div createPost>
        <div mainBody>
          <p postText>${this.postBody}</p>
        </div>
        <div extraInfo>
          <div resourceLink>
            <p subtitle>Resource Link:</p>
            <a href="${this.resourceLink}">Resource</a>
          </div>
          <div dateOfPost>
            <p subtitle>Date of post:</p>
            <philosophers-date ?isCreateDate="${this.isCreatePost}"></philosophers-date>
          </div>
          <div tags>
            <p subtitle>Tags:</p>
            <post-tags ?iscreatepost="${this.isCreatePost}"></post-tags>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      [createPost] {
        padding: 7px;
        /* display: flex; */
        background-color: lightgrey;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid blue;
        /* border-bottom-left-radius: 5px; */
      }

      [mainBody] {
        padding: 7px;
        display: flex;
        justify-content: left;
        background-color: lightgrey;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid blue;
        /* border-bottom-left-radius: 5px; */
      }

      [extraInfo] {
        padding: 7px;
        display: inline-block;
        background-color: lightgrey;
        /* border-left: 5px solid blue; */
        /* border-bottom: 5px solid blue; */
        /* border-bottom-left-radius: 5px; */
      }

      [inputPostText] {
        width: 100%;
      }

      [text] {
        font-size: 17px;
      }
    `;
  }

  constructor() {
    super();
    this.isCreatePost = false;
    this.postBody = 'Enter post text here...';
    this.resourceLink = 'default resource';
  }
}

customElements.define('post-body', PostBody);
