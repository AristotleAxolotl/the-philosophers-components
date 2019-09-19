/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

export class PostTags extends LitElement {
  static get properties() {
    return {
      _addedTags: {
        type: Array,
        reflect: true,
      },
      isCreatePost: {
        type: Boolean,
      },
    };
  }

  // static get dependencies() {

  // }

  static get element() {
    return 'post-tags';
  }

  static register() {
    utils.register(PostTags);
  }

  render() {
    return html`
      <div tags>
        ${this._addedTags.map(
          (text, index) =>
            html`
              <div tagWrapper>
                <span tag id="tag-${index}" @click="${e => this._handleClick(e)}">${text}</span>
              </div>
            `,
        )}
      </div>
    `;
  }

  // TODO: clicking on tags on a post could do a searxh for other posts with similar tags
  _handleClick(e) {
    this.querySelector();
    console.log("One day this will search for posts with a '", e.target.innerText, "' tag");
  }

  static get styles() {
    return css`
      [tags] {
        display: flex;
        justify-content: left;
        text-align: center;

        border: 1px solid #ccc;
        padding: 4px;
        font-family: Arial;
      }
      [tags] [tag] {
        cursor: pointer;
        display: block;
        color: #555;
        background: #add;
        padding: 5px 10px;
        /* padding-right: 30px; */
        margin: 4px;
      }
      [tags] [tag]:hover {
        opacity: 0.7;
      }
      [tags] input {
        background: #eee;
        border: 0;
        margin: 4px;
        padding: 7px;
        width: auto;
      }
    `;
  }

  constructor() {
    super();
    this._addedTags = ['example', 'tag'];
  }
}

// customElements.define('post-tags', Post);
