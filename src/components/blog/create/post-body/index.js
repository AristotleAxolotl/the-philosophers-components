/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { CreatePhilosophersDate } from '../../../date/create';
import { CreatePhilosophersTags } from '../../../tags/create';
import { utils } from '../../../lib';

// post body has a main body (text), link to resource, date resource added, technology involved tags,
// TODO: buttons to submit/save for later/cancel
// TODO: Should refactor all code to not display two components (create/view ARE different & should have different classes.)
export class CreatePostBody extends LitElement {
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

  static get element() {
    return 'create-post-body';
  }

  static get dependencies() {
    return [CreatePhilosophersDate, CreatePhilosophersTags];
  }

  static register() {
    utils.register(CreatePostBody);
  }

  // TODO: Create should be wrapped in form
  render() {
    return html`
      <div createPost id="createPost">
        <div mainBody id="mainBody">
          <textarea inputPostText id="inputPostText" rows="7" placeholder=${this.postBody}></textarea>
        </div>
        <div extraInfo id="extraInfo">
          <div resourceLink id="resourceLink">
            <p subtitle>Resource Link:</p>
            <input id="resourceInput" type="text" placeholder="Enter resource link here..." />
          </div>
          <div dateOfPost id="dateOfPost">
            <p subtitle>Date of post:</p>
            <create-philosophers-date id="createDate"></create-philosophers-date>
          </div>
          <div tags id="tags">
            <p subtitle>Tags:</p>
            <create-philosophers-tags id="createTags"></create-philosophers-tags>
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
    this.postBody = 'Enter post text here...';
    this.resourceLink = 'default resource';
  }
}

// customElements.define('create-post-body', CreatePostBody);