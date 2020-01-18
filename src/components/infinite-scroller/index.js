/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../lib';

import { Card } from '../card';

// TODO: infini scroller should take a component, and a function to call to get more data.

// TODO: ROLL THIS WAAAAAY BACK
// TODO: content should have observable properties height&width
// TODO: these can be grabbed and set by encapsulation
// TODO: could have a method for requested size? then this can control how close to it it gets to render it.
// TODO: check if size is just over half, if it is make it half
// Have mutation observer here or in child?
export class InfiniteScroller extends LitElement {
  static get properties() {
    return {
      maxLoad: { type: Number },
      maxDisplay: { type: Number },
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
    this.maxLoad = 20;
    this.maxDisplay = 20;
    // this.findMore = this._defaultFindMore;
  }

  _defaultFindMore(noToShow, noToLoad, klass) {
    const elementList = [];
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      const element = document.createElement(klass.element);

      element.id = i;
      element.cardLink = 'http://localhost:8000/demo/cardLinkExample';
      element.cardWidth = i % 2 === 0 ? '200px' : '500px';
      element.cardHeight = i % 2 === 0 ? '200px' : '500px';

      const card = document.createAttribute('card');
      const item = document.createAttribute('item');

      element.setAttributeNodeNS(card);
      element.setAttributeNodeNS(item);
      element.cardText = i;
      // element.addEventListener('custom-element-loaded', e => {
      //   console.log('infini-scroller ', e.detail);
      //   console.log('height: ', e.target.getContentHeight());
      //   console.log('width: ', e.target.getContentWidth());
      //   // console.log('rec? ', e.target._getRecommendedDimensions());
      //   this._resizeGridElement(element);
      // });
      elementList.push(element);
    }
    return elementList;
  }

  // TODO: this is apparently supposed to be a aync function - in order to call nested asyncfunctions.
  async _resizeGridElement(element) {
    // console.log('resizing: ', element);
    const grid = this.shadowRoot.querySelector('[grid]');
    // const gridWidth = grid.clientWidth;

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

    let height;
    let width;

    if (!!element.recHeight && !!element.recWidth) {
      height = await element.recHeight;
      width = await element.recWidth;
      // console.log('REC HW: ', height, width);
    } else {
      height = await element.getContentHeight();
      // height = height.replace(/\D/g, '');
      width = await element.getContentWidth();
      // width = width.replace(/\D/g, '');
    }

    const rowSpan = Math.ceil(height / (rowHeight + rowGap));

    const columnSpan = Math.ceil(width / (columnWidth + columnGap));

    element.style.gridRowEnd = `span ${rowSpan}`;

    element.style.gridColumnEnd = `span ${columnSpan}`;

    // ford (n) columns, there are (n-1) gaps
    // const noOfColumns = parseInt((gridWidth + columnGap) / (columnWidth + columnGap), 10);

    // TODO: maybe try with some more realistic data before deciding a chaos element is necessary?

    element.style.gridRowEnd = `span ${rowSpan}`;
    element.style.gridColumnEnd = `span ${columnSpan}`;
  }

  // _resizeAllGridElements() {
  //   const allItems = this.shadowRoot.querySelectorAll('[item]');
  //   allItems.forEach(element => this._resizeGridElement(element));
  // }

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

    // console.log(this.shadowRoot.querySelector('[grid]'));
    const observer = new MutationObserver(mutationRecords => {
      // console.log(`Change detected: ${mutationRecords}`);
      mutationRecords.forEach(mutation => {
        // console.log(mutation);
        // console.log(mutation.target);
        // console.log(mutation.addedNodes);
        mutation.addedNodes.forEach(node => {
          // this._resizeGridElement(node);
          node.addEventListener('custom-element-updated', e => {
            // console.log('infini-scroller ', e.detail);
            // console.log('height: ', e.target.getContentHeight());
            // console.log('width: ', e.target.getContentWidth());
            this._resizeGridElement(node);
          });
        });
      });
    });

    observer.observe(this.shadowRoot.querySelector('[grid]'), { childList: true });

    // this.shadowRoot.querySelector('[grid]').addEventListener('custom-element-loaded', e => {
    //   console.log('delegated:: ', e.target);
    // });

    // targetNode.addEventListener('custom-element-loaded', e => {
    //   console.log(e.detail);
    //   console.log(e.target.getContentHeight());
    //   console.log(e.target.getContentWidth());
    // });

    this.loadMore();

    // this._resizeAllGridElements();
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

  // _addEventListeners() {
  //   // console.log(this.shadowRoot.querySelector('[grid]').querySelectorAll('[item]'));
  //   this.shadowRoot
  //     .querySelector('[grid]')
  //     .querySelectorAll('[item]')
  //     .forEach(element => {
  //       if (!element.style.gridRowEnd && !element.style.gridColumnEnd) {
  //         console.log('non-loaded element', element);
  //         console.log(element._loaded);
  //         //This is not wokring due to event delegation
  //         //Need to listen in a super-parent class
  //         //Or maybe just here? this might be the super-parent.
  //         //Or maybe create the element inside the document instead?
  //         element.addEventListener('custom-element-loaded', e => {
  //           console.log('infini-scroller ', e.detail);
  //           console.log('height: ', e.target.getContentHeight());
  //           console.log('width: ', e.target.getContentWidth());
  //           // console.log('rec? ', e.target._getRecommendedDimensions());
  //           this._resizeGridElement(element);
  //         });
  //         return;
  //       }
  //       console.log('loaded element ', element);
  //     });
  // }

  // TODO: this could be optimised by loading one at a time & calling the func 'max' no of times
  loadMore() {
    // call method later which will be call to DB
    // This used to be +=, but moved that to another method - this may be innefficient but who knows

    if (this.findMore) {
      // console.log('loading more...');
      const elementList = this.findMore(this.maxDisplay, this.maxLoad);
      elementList.forEach(element => this.shadowRoot.querySelector('[grid]').appendChild(element));
      // ATTEMPT with DOM functions
      // for (let i = this.maxDisplay - this.maxLoad; i < this.maxDisplay; i += 1) {
      //   const element = document.createElement('philosophers-card');

      //   element.id = i;
      //   element.cardLink = 'http://localhost:8000/demo/cardLinkExample';
      //   element.cardWidth = i % 2 === 0 ? '200px' : '500px';
      //   element.cardHeight = i % 2 === 0 ? '200px' : '500px';

      //   const card = document.createAttribute('card');
      //   const item = document.createAttribute('item');

      //   element.setAttributeNodeNS(card);
      //   element.setAttributeNodeNS(item);
      //   element.cardText = i;
      //   // element.addEventListener('custom-element-loaded', e => {
      //   //   console.log('infini-scroller ', e.detail);
      //   //   console.log('height: ', e.target.getContentHeight());
      //   //   console.log('width: ', e.target.getContentWidth());
      //   //   // console.log('rec? ', e.target._getRecommendedDimensions());
      //   //   this._resizeGridElement(element);
      //   // });
      //   console.log(element);
      //   this.shadowRoot.querySelector('[grid]').appendChild(element);
      // }

      // this.shadowRoot.querySelector('[grid]').insertAdjacentHTML('beforeend', this.findMore(
      //   this.maxLoad,
      //   this.maxDisplay,
      // ));
      // this._addEventListeners();
      // this._resizeAllGridElements();
    } else {
      // console.log('default loading more...');
      const elementList = this._defaultFindMore(this.maxDisplay, this.maxLoad, Card);
      elementList.forEach(element => this.shadowRoot.querySelector('[grid]').appendChild(element));
      // this.shadowRoot.querySelector('[grid]').innerHTML += this._defaultFindMore(
      //   this.maxLoad,
      //   this.maxDisplay,
      // );
      // this._addEventListeners();
      // this._resizeAllGridElements();
    }
    // this._addEventListeners();
    this.maxDisplay += this.maxLoad;
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
