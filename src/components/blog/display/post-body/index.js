/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { PhilosophersDate } from '../../../date';
import { PhilosophersTags } from '../../../tags/display';
import { utils } from '../../../lib';

// post body has a main body (text), link to resource, date resource added, technology involved tags,
// TODO: buttons to submit/save for later/cancel
// TODO: Should refactor all code to not display two components (create/view ARE different & should have different classes.)
export class PostBody extends LitElement {
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
    return 'post-body';
  }

  static get dependencies() {
    return [PhilosophersDate, PhilosophersTags];
  }

  static register() {
    utils.register(PostBody);
  }

  render() {
    return html`
      <div post>
        <div mainBody>
          <p postText>
            <slot name="mainBodyText"></slot>
          </p>
        </div>
        <div extraInfo>
          <div resourceLink>
            <p subtitle>Resource Link:</p>
            <a href="${this.resourceLink}">Resource</a>
          </div>
          <div dateOfPost>
            <p subtitle>Date of post:</p>
            <philosophers-date></philosophers-date>
          </div>
          <div tags>
            <p subtitle>Tags:</p>
            <philosophers-tags></philosophers-tags>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
    * {
        margin: 5px;
      }
      [post] {
        padding: 7px;
        display: block;
        background-color: #1F2833;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid #66FCF1;
        /* border-bottom-left-radius: 5px; */
      }

      [mainBody] {
        padding: 7px;
        display: flex;
        justify-content: left;
        background-color: #1F2833;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid #66FCF1;
        /* border-bottom-left-radius: 5px; */
      }

      [extraInfo] {
        padding: 7px;
        display: inline-block;
        background-color: #1F2833;
        /* border-left: 5px solid blue; */
        /* border-bottom: 5px solid blue; */
        /* border-bottom-left-radius: 5px; */
      }

      [postText] {
        color: #C5C6C7;
        width: 100%;
        height: 100%;
      }

      [subtitle] {
        color: #C5C6C7;
      }

      [text] {
        font-size: 17px;
      }
    `;
  }

  constructor() {
    super();
    // this.postBody = '[Example Post Text]';
    this.resourceLink = 'default resource';
  }
}

// customElements.define('post-body', PostBody);
