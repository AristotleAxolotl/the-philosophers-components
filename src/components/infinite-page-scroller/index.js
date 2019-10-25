/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';
import { Post } from '../blog/display';

export class InfiniteScroller extends LitElement {
  static get properties() {
    return {
      max: { type: Number },
    };
  }

  render() {
    return html`
      <div debugHeader id="debugHeader">top:</div>
      <div scrollingWrapper id="scrollingWrapper">
        <div inner id="inner"></div>
      </div>
    `;
  }

  constructor() {
    super();
    this.max = 20;
  }

  static get element() {
    return 'infinite-scroller';
  }

  static get dependencies() {
    return [Post];
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector('#scrollingWrapper')
      .addEventListener('scroll', () => this.scroller());

    this.loadMore();
  }

  static register() {
    utils.register(InfiniteScroller);
  }

  scroller() {
    const top = this.shadowRoot.querySelector('#scrollingWrapper').scrollTop;

    this.shadowRoot.querySelector(
      '#debugHeader',
    ).innerHTML = `top: ${top} diff: ${this.shadowRoot.querySelector('#inner').offsetHeight -
      this.shadowRoot.querySelector('#scrollingWrapper').offsetHeight}`;

    if (
      top >=
      this.shadowRoot.querySelector('#inner').offsetHeight -
        this.shadowRoot.querySelector('#scrollingWrapper').offsetHeight
    ) {
      this.shadowRoot.querySelector('#debugHeader').innerHtML = `top: ${top} diff: ${'#inner'
        .offsetHeight - this.shadowRoot.querySelector('#scrollingWrapper').offsetHeight} bottom`;
      this.loadMore();
    }
  }

  loadMore() {
    for (let i = this.max - 20; i < this.max; i += 1) {
      this.shadowRoot.querySelector('#inner').innerHTML += `
      <blog-post postBody=${i}>
      </blog-post>
      `;
    }
    this.max += 20;
  }

  static get styles() {
    return css`
      [scrollingWrapper] {
        width: 90vw;
        height: 90vh;
        border: 1px solid black;
        overflow: auto;
      }
    `;
  }
}
