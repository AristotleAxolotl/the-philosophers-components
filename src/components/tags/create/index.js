/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

// import { CLICK, ENTER } from '../../../events';

export class CreatePhilosophersTags extends LitElement {
  static get properties() {
    return {
      _addedTags: {
        type: Array,
        reflect: true,
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

  getTags(){
    return this._addedTags;
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
          @keys-pressed="${() => this._handleEnter()}"
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

    const ele = this.shadowRoot.querySelector(`#${e.target.id}`);

    const tagValue = ele.innerText;

    this._addedTags = this._addedTags.filter(tag => tagValue !== tag);
  }

  _handleEnter() {
    const ele = this.shadowRoot.querySelector('#inputTag');

    const txt = ele.value;

    this._addedTags.push(txt);

    ele.value = '';

    this.requestUpdate();
  }

  static get styles() {
    return css`
      [tags] {
        background-color: #45A29E;
        float: left;
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
        background: #C5C6C7;
        border: 0;
        margin: 4px;
        padding: 7px;
        width: auto;
      }
      input[type=text] {
        transition: 0.5s;
        outline: none;
        background-color: #C5C6C7;
        border:0;
      }
      input[type=text]:focus {
        border: 5px solid #66FCF1;
      }
    `;
  }

  constructor() {
    super();
    this._addedTags = ['example', 'tag'];
  }
}

// customElements.define('create-post-tags', CreatePostTags);
