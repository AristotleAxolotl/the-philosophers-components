import { html, css, LitElement } from 'lit-element';
import './nav-card.js';

// TODO: something is going wrong between this and nav-card; array of links is not passing through properly & CSS not displaying properly

export default class NavBar extends LitElement {
  static get properties() {
    return {
      navCards: {
        type: Array,
      },
    };
  }

  render() {
    return html`
      <div nav-bar>
        ${this.navCards.map(
          (card, index) =>
            html`
              <nav-card
                id="card-${index}"
                name="${card.name}"
                .resourceLinks=${card.links}
              ></nav-card>
            `,
        )}
      </div>
    `;
  }

  static get styles() {
    return css`
      /* Navbar container */
      [nav-bar] {
        display: flex;

        align-items: left;
        justify-content: left;

        overflow: hidden;

        background-color: #333;

        font-family: Arial;
      }
    `;
  }

  constructor() {
    super();
    this.navCards = [
      { name: 'Home?', links: ['/home'] },
      { name: 'Blogs', links: ['/my/blog', '/your/blog'] },
    ];
  }
}

customElements.define('nav-bar', NavBar);
