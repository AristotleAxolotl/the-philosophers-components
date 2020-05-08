import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class PhilosophersPara extends LitElement {
  static get properties() {
    return {
      level: { type: Number },
    };
  }

  static get element() {
    return 'philosophers-para';
  }

  static register() {
    utils.register(PhilosophersPara);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: 0.03125em;
        text-decoration: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
      }
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}
