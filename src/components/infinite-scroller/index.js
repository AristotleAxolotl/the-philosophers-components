/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
// import { imagesLoaded } from 'imagesloaded';
import { utils } from '../lib';

// TODO: infini scroller should take a component, and a function to call to get more data.

// TODO: ROLL THIS WAAAAAY BACK
// TODO: content should have observable properties height&width
// TODO: these can be grabbed and set by encapsulation
// TODO: could have a method for requested size? then this can control how close to it it gets to render it.
// TODO: check if size is just over half, if it is make it half
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
      <!-- <div debugHeader id="debugHeader">top:</div> -->
      <div gridContainer>
        <div scrollingWrapper>
          <div grid></div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.max = 50;
    this.component = '';
    this.findMore = this._defaultFindMore;
  }

  _defaultFindMore(noToGet) {
    for (let i = noToGet - this.max; i < noToGet; i += 1) {
      this.component += `
      <blog-post class="item" id=${i} postBody=${i}>
      </blog-post>
      `;
    }
    return this.component;
  }

  // TODO: this is apparently supposed to be a aync function - in order to call nested asyncfunctions.
  async _resizeGridElement(element) {
    const grid = this.shadowRoot.querySelector('[grid]');
    const gridWidth = grid.clientWidth;

    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-template-rows'),
      10,
    );

    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);

    const columnWidth = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-template-columns'),
      10,
    );

    const columnGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-column-gap'),
      10,
    );

    let height = await element.getContentHeight();
    height = height.replace(/\D/g, '');

    let width = await element.getContentWidth();
    width = width.replace(/\D/g, '');

    const rowSpan = Math.ceil(height / (rowHeight + rowGap));

    const columnSpan = Math.ceil(width / (columnWidth + columnGap));

    element.style.gridRowEnd = `span ${rowSpan}`;

    element.style.gridColumnEnd = `span ${columnSpan}`;

    // ford (n) columns, there are (n-1) gaps
    const noOfColumns = parseInt((gridWidth + columnGap) / (columnWidth + columnGap), 10);

    // TODO: maybe try with some more realistic data before deciding a chaos element is necessary?
    if (element.id % 10 === 0) {
      // try to include span?
      // e.g. a span of 7 means it should start on a factor of 7
      element.style.gridColumn = `${columnSpan + 1}`;

      element.style.gridRowEnd = `span ${rowSpan}`;

      element.style.gridColumnEnd = `span ${columnSpan}`;
    } else if (element.id % 3 === 0) {
      // element.style.gridColumn = `${parseInt((noOfColumns / 3), 10)}`;

      element.style.gridRowEnd = `span ${rowSpan}`;

      element.style.gridColumnEnd = `span ${columnSpan}`;
    } else {
      element.style.gridRowEnd = `span ${rowSpan}`;

      element.style.gridColumnEnd = `span ${columnSpan}`;
    }
  }

  _resizeAllGridElements() {
    const allItems = this.shadowRoot.querySelectorAll('[item]');
    allItems.forEach(element => this._resizeGridElement(element));
  }

  static get element() {
    return 'infinite-scroller';
  }

  static get dependencies() {
    return [];
  }

  // TODO: add event listner for resize to reset number of columns
  firstUpdated() {
    this.shadowRoot
      .querySelector('[scrollingWrapper]')
      .addEventListener('scroll', () => this.scroller());

    this.loadMore();
    this._resizeAllGridElements();
  }

  static register() {
    utils.register(InfiniteScroller);
  }

  scroller() {
    const top = this.shadowRoot.querySelector('[scrollingWrapper]').scrollTop;

    // this.shadowRoot.querySelector(
    //   '#debugHeader',
    // ).innerHTML = `top: ${top} diff: ${this.shadowRoot.querySelector('[grid]').offsetHeight -
    //   this.shadowRoot.querySelector('#scrollingWrapper').offsetHeight}`;

    if (
      top >=
      this.shadowRoot.querySelector('[grid]').offsetHeight -
        this.shadowRoot.querySelector('[scrollingWrapper]').offsetHeight
    ) {
      // this.shadowRoot.querySelector('#debugHeader').innerHtML = `top: ${top} diff: ${'[grid]'
      //   .offsetHeight - this.shadowRoot.querySelector('#scrollingWrapper').offsetHeight} bottom`;
      this.loadMore();
    }
  }

  _findEmptyGridSpaces() {}

  loadMore() {
    // call method later which will be call to DB
    // This used to be +=, but moved that to another method - this may be innefficient but who knows

    if (this.findMore) {
      this.shadowRoot.querySelector('[grid]').innerHTML += this.findMore(this.max);
      this._resizeAllGridElements();
    } else {
      this.shadowRoot.querySelector('[grid]').innerHTML += this._defaultFindMore(this.max);
      this._resizeAllGridElements();
    }
    this.max += this.max;
  }

  static get styles() {
    return css`
      [gridContainer] {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      [scrollingWrapper] {
        width: 90vw;
        height: 90vh;
        overflow: auto;
      }
      [grid] {
        display: grid;
        grid-gap: 10px;
        grid-auto-flow: dense;
        grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
        grid-auto-rows: 20px;
      }
    `;
  }
}
