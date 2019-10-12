/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

export class CreatePhilosophersTags extends LitElement {
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
  //   return [CreatePostBody];
  // }

  static get element() {
    return 'create-philosophers-tags';
  }

  static register() {
    utils.register(CreatePhilosophersTags);
  }

  render() {
    return html`
      <div tags>
        ${this._addedTags.map(
          (text, index) =>
            html`
              <span tag id="tag-${index}" @click="${e => this._handleClick(e)}">${text}</span>
            `,
        )}
        <input
          inputTag
          id="inputTag"
          type="text"
          placeholder="Add a tag..."
          keys="enter"
          on-keys-pressed="${() => {
            this._handleEnter();
          }}"
        />
      </div>
    `;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('#inputTag').addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this._handleEnter();
      }
    });
  }

  _handleClick(e) {
    // const selectedIndex = e.target.id.replace("tag-", "");

    // TODO: isCreatePost is no longer needed, remove this after tests have been added for the functionality
    if (this.isCreatePost) {
      const ele = this.shadowRoot.querySelector(`#${e.target.id}`);

      const tagValue = ele.innerText;

      this._addedTags = this._addedTags.filter(tag => tagValue !== tag);
    }
  }

  _handleEnter() {
    const ele = this.shadowRoot.querySelector('#inputTag');

    const txt = ele.value;

    this._addedTags.push(txt);

    this.requestUpdate();
  }

  static get styles() {
    return css`
      [tags] {
        float: left;
        border: 1px solid #ccc;
        padding: 4px;
        font-family: Arial;
      }
      [tags] [tag] {
        cursor: pointer;
        display: block;
        float: left;
        color: #555;
        background: #add;
        padding: 5px 10px;
        padding-right: 30px;
        margin: 4px;
      }
      [tags] [tag]:hover {
        opacity: 0.7;
      }
      [tags] [tag]:after {
        position: absolute;
        content: '×';
        border: 1px solid;
        border-radius: 10px;
        padding: 0 4px;
        margin: 3px 0 10px 7px;
        font-size: 10px;
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
    this.isCreatePost = true;
  }
}

// customElements.define('create-post-tags', CreatePostTags);
