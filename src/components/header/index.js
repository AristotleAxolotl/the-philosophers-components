import { html, css, LitElement } from 'lit-element';

import { utils, fonts } from '../lib';

export class PhilosophersHeader extends LitElement {
  static get properties() {
    return {
      level: { type: Number },
      fontFamily: { type: String },
    };
  }

  static get element() {
    return 'philosophers-header';
  }

  static register() {
    utils.register(PhilosophersHeader);
  }

  static get styles() {
    return [
      fonts.Strong,
      fonts.Clean,
      fonts.Chic,
      fonts.Progressive,
      css`
        :host {
          display: block;
          /* font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
          /* font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif; */
          /* font-family: Futura, "Trebuchet MS", Arial, sans-serif; */
          /* font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; */
          font-family: inherit;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;

          /* font-weight: 100; */

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
          font-family: 'Clean';
        }

        :host([fontFamily='strong']) {
          font-family: 'Strong';
        }

        :host([fontFamily='chic']) {
          font-family: 'Chic';
        }

        :host([fontFamily='progressive']) {
          font-family: 'Progressive';
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
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }
}
