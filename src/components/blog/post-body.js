import { html, css, LitElement } from 'lit-element';
import '../philosophers-date.js';
import './post-tags.js';

// TODO: post body has a main body (text), link to resource, date resource added, technology involved tags, buttons to submit/save for later/cancel
export default class PostBody extends LitElement {
  static get properties() {
    return {
      postBody: {
        type: String,
      },
      isCreatePost: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      ${this._displayPostType()}
    `;
  }

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
              <philosophers-date></philosophers-date>
            </div>
            <div tags>
              <p subtitle>Tags:</p>
              <post-tags></post-tags>
            </div>
          </div>
        </div>
      `;
    }
    return html`
      <div mainBody>
        <p text>
          <slot name="mainBodyText">Post text should show here...</slot>
        </p>
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
    this.isCreatePost = true;
    this.postBody = 'Enter post text here...';
  }
}

customElements.define('post-body', PostBody);
