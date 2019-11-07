/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

// TODO: create comments section. comments can be replied to, etc. like reddit.
// TODO: Each comment is indented
export class NavCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
      resourceLinks: {
        type: Array,
      },
    };
  }

  // static get dependencies() {

  // }
  static get element() {
    return 'nav-card';
  }

  static register() {
    utils.register(NavCard);
  }

  render() {
    return html`
      ${this._isDropdownCard()}
    `;
  }

  _isDropdownCard() {
    if (this.resourceLinks.length === 1) {
      return html`
        <div nav-card>
          <a href="${this.resourceLinks[0]}">${this.name}</a>
        </div>
      `;
    }
    return html`
      <div nav-card>
        <div dropdown>
          <button dropbtn>
            ${this.name}
            <i arrow down></i>
          </button>
          <div dropdown-content>
            ${this.resourceLinks.map(
              resourceLink =>
                html`
                  <a href="${resourceLink}">${resourceLink}</a>
                `,
            )}
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      /* make down carat */
      i {
        border: solid #66FCF1;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
      }
      [down] {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
      /* Navbar container */
      [nav-card] {
        overflow: hidden;
        /* background-color: #1F2833; */
        font-family: Arial;
      }

      /* Links inside the navbar */
      [nav-card] a {
        float: left;
        font-size: 16px;
        color: #66FCF1;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      /* The dropdown container */
      [dropdown] {
        float: left;
        overflow: hidden;
      }

      /* Dropdown button */
      [dropdown] [dropbtn] {
        font-size: 16px;
        border: none;
        outline: none;
        color: #66FCF1;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
      }

      /* Add a red background color to navbar links on hover */
      [dropdown]:hover [dropbtn] {
        background-color: #45A29E;
      }

      /* Dropdown content (hidden by default) */
      [dropdown-content] {
        display: none;
        position: absolute;
        background-color: #45A29E;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      /* Links inside the dropdown */
      [dropdown-content] a {
        float: none;
        color: #C5C6C7;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      /* Add a grey background color to dropdown links on hover */
      [dropdown-content] a:hover {
        background-color: #0b0C10;
      }

      /* Show the dropdown menu on hover */
      [dropdown]:hover [dropdown-content] {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Home';
    this.resourceLinks = ['/index', '/test'];
  }
}

// customElements.define('nav-card', NavCard);
