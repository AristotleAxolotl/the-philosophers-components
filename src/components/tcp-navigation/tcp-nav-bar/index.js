/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { NavCard } from '../tcp-nav-card';
import { utils } from '../../lib';

// TODO: something is going wrong between this and nav-card; array of links is not passing through properly & CSS not displaying properly
// Think thats sorted now?
// TODO: navBar should switch based on selection
export class NavBar extends LitElement {
  static get properties() {
    return {
      navCards: {
        type: Array,
      },
    };
  }

  static get element() {
    return 'nav-bar';
  }

  static get dependencies() {
    return [NavCard];
  }

  static register() {
    utils.register(NavBar);
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

// customElements.define('nav-bar', NavBar);
