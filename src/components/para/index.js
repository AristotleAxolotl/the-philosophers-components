import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

export class PhilosophersPara extends LitElement {
  static get properties() {
    return {
      invertedText: { type: Boolean },
      fontFamily: { type: String },
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
        /* font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
        /* font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
        /* font-family: Futura, "Trebuchet MS", Arial, sans-serif; */
        /* font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; */
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

      :host([invertedText]) {
        display: block;
        /* font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
        /* font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
        /* font-family: Futura, "Trebuchet MS", Arial, sans-serif; */
        /* font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; */
        font-family: inherit;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        /* font-size: 3rem;
        line-height: 4rem;
        letter-spacing: 0.03125em; */
        font-size: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-decoration: inherit;
        text-transform: inherit;

        background: inherit;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;

        color: transparent;
        filter: invert(1) grayscale(0) contrast(9);

        margin: 0;
        padding: 0;
      }

      :host([fontFamily='clean']) {
        font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;
      }

      :host([fontFamily='strong']) {
        font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      }

      :host([fontFamily='chic']) {
        font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
      }
    `;
  }

  // firstUpdated() {
  // const parentWidth = this.parentNode.clientWidth;
  // console.log('PARENT :: ', parentWidth);
  // const currentWidth = this.clientWidth;
  // console.log('THIS :: ', currentWidth);
  // this.percent = Math.round((parentWidth / currentWidth) * 100);
  // console.log('PERCENT ::', this.percent);
  // this.style.backgroundSize = `${this.percent}%`;
  // this.style.backgroundPosition = '0 top';
  // this.style.overflow = `hidden`;
  // }

  render() {
    return html` <slot></slot> `;
  }
}
