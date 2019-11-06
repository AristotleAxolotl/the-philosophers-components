/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { utils } from '../lib';

// TODO: infini scroller should take a component, and a function to call to get more data.
export class InfiniteScroller extends LitElement {
  static get properties() {
    return {
      max: { type: Number },
      component: { type: String },
      findMore: { type: Function },
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
    this.component = '';
    this.findMore = this._defaultFindMore;
  }

  _defaultFindMore(noToGet) {
    for (let i = noToGet - 20; i < noToGet; i += 1) {
      this.component += `
      <blog-post postBody=${i}>
      </blog-post>
      `;
    }
    return this.component;
  }

  static get element() {
    return 'infinite-scroller';
  }

  static get dependencies() {
    return [];
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
    // call method later which will be call to DB
    // This used to be +=, but moved that to another method - this may be innefficient but who knows

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!this.findMore) {
      this.shadowRoot.querySelector('#inner').innerHTML = this.findMore(this.max);
    } else {
      this.shadowRoot.querySelector('#inner').innerHTML = this._defaultFindMore(this.max);
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
