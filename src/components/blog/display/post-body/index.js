/* eslint-disable import/extensions */
import { html, css } from 'lit-element';
import { PhilosophersDate } from '../../../date';
import { PhilosophersTags } from '../../../tags/display';
import { utils } from '../../../lib';
import { Content } from '../../../content';

import { CUSTOM_ELEMENT_LOADED } from '../../../../events';

// post body has a main body (text), link to resource, date resource added, technology involved tags,
// TODO: buttons to submit/save for later/cancel
// TODO: Should refactor all code to not display two components (create/view ARE different & should have different classes.)
export class PostBody extends Content {
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
      <div content>
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
        background-color: #1f2833;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid #66fcf1;
        /* border-bottom-left-radius: 5px; */
      }

      [mainBody] {
        padding: 7px;
        display: flex;
        justify-content: left;
        background-color: #1f2833;
        /* border-left: 5px solid blue; */
        border-bottom: 5px solid #66fcf1;
        /* border-bottom-left-radius: 5px; */
      }

      [extraInfo] {
        padding: 7px;
        display: inline-block;
        background-color: #1f2833;
        height: 295px;
        width: 420px;
        /* border-left: 5px solid blue; */
        /* border-bottom: 5px solid blue; */
        /* border-bottom-left-radius: 5px; */
      }

      [postText] {
        color: #c5c6c7;
        width: 100%;
        height: 100%;
      }

      [subtitle] {
        color: #c5c6c7;
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

  connectedCallback() {
    super.connectedCallback();

    // TODO: Resize listeners should probably be in the parent class (i.e. infini-scroller)

    // window.addEventListener('resize', () => {
    //   this._loaded = true;
    // });

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded, post-body');
      this._loaded = true;
      this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });
  }

  disconnectedCallback() {
    // window.removeEventListener('resize', () => {
    //   this._loaded = false;
    // });

    document.removeEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded - remove EventListener');
      // this._loaded = false;
      // this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });

    super.disconnectedCallback();
  }
}

// customElements.define('post-body', PostBody);
