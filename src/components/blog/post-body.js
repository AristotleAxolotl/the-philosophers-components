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
      resourceLink: {
        type: String,
      },
    };
  }

  // TODO: create should be wrapped in form
  render() {
    return html`
      <div post>
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
            <philosophers-date ?isCreateDate=${false}></philosophers-date>
          </div>
          <div tags>
            <p subtitle>Tags:</p>
            <post-tags></post-tags>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      [post] {
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
    this.postBody = 'Enter post text here...';
    this.resourceLink = 'default resource';
  }
}

customElements.define('post-body', PostBody);
