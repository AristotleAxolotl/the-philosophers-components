/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css } from 'lit-element';

import { utils } from '../../lib';
import { Content } from '../../content';

export class TopBanner extends Content {
  static get properties() {
    return {
      bannerText: { type: String },
    };
  }

  constructor() {
    super();
    this.bannerText = 'Demo Banner Text!';
  }

  show() {
    const topBanner = this.shadowRoot.querySelector('[topBanner]');
    topBanner.classList.add('show');
  }

  showFor(seconds) {
    const topBanner = this.shadowRoot.querySelector('[topBanner]');
    topBanner.classList.add('show');
    setTimeout(() => {
      topBanner.classList.remove('show');
    }, seconds);
  }

  hide() {
    const topBanner = this.shadowRoot.querySelector('[topBanner]');
    topBanner.classList.remove('show');
  }

  toggle() {
    const topBanner = this.shadowRoot.querySelector('[topBanner]');
    topBanner.classList.toggle('show');
  }

  render() {
    return html`
      <div topBanner>
        <p message>
          <slot name="bannerText">${this.bannerText}</slot>
        </p>
      </div>
    `;
  }

  static get element() {
    return 'top-banner';
  }

  static get dependencies() {
    return [];
  }

  static register() {
    utils.register(TopBanner);
  }

  static get styles() {
    return css`
      [topBanner] {
        display: flex;

        width: 100vw;
        height: 2vh;

        justify-content: center;
        align-items: center;

        position: fixed;

        padding: 20px;
        border: 1px solid;

        background: green;

        opacity: 0;
        transition: opacity 1s;
      }

      [topBanner].show {
        /* -webkit-transition: all 1s; */
        display: flex;

        width: 100vw;
        height: 2vh;

        justify-content: center;
        align-items: center;

        position: fixed;

        padding: 20px;
        border: 1px solid;

        background: green;

        opacity: 1;
        transition: opacity 1s;
      }
    `;
  }
}
