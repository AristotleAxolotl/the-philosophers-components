/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

export class PhilosophersTags extends LitElement {
  static get properties() {
    return {
      _addedTags: {
        type: Array,
        reflect: true,
      },
    };
  }

  // static get dependencies() {

  // }

  static get element() {
    return 'philosophers-tags';
  }

  static register() {
    utils.register(PhilosophersTags);
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
    // eslint-disable-next-line no-console
    console.log("One day this will search for posts with a '", e.target.innerText, "' tag");
  }

  static get styles() {
    return css`
      [tags] {
        display: flex;
        justify-content: left;
        text-align: center;

        background-color: #45A29E;
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
    `;
  }

  constructor() {
    super();
    this._addedTags = ['example', 'tag'];
  }
}

// customElements.define('post-tags', Post);
