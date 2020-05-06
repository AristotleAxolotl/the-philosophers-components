import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class PhilosophersHeader extends LitElement {
  static get properties() {
    return {
      level: { type: Number },
    };
  }

  static get element() {
    return 'philosophers-header';
  }

  static register() {
    utils.register(PhilosophersHeader);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-weight: 300;
        text-decoration: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
      }

      :host([level='1']) {
        font-size: 96px;
        line-height: 120px;
        letter-spacing: 3px;
      }

      :host([level='2']) {
        font-size: 60px;
        line-height: 70px;
        letter-spacing: 3px;
      }

      :host([level='3']) {
        font-size: 48px;
        line-height: 58px;
        letter-spacing: 3px;
      }

      :host([level='4']) {
        font-size: 34px;
        line-height: 44px;
        letter-spacing: 4px;
      }

      :host([level='5']) {
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 3px;
      }

      :host([level='6']) {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 3px;
      }
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}
