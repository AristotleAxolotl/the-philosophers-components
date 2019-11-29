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
    this.max = 20;
    this.component = '';
    this.findMore = this._defaultFindMore;
  }

  _defaultFindMore(noToGet) {
    for (let i = noToGet - 20; i < noToGet; i += 1) {
      this.component += `
      <blog-post class="item" id=${i} postBody=${i}>
      </blog-post>
      `;
    }
    return this.component;
  }

  // TODO: this is apparently supposed to be a aync function - in order to call nested asyncfunctions.
  // eslint-disable-next-line class-methods-use-this
  _resizeGridElement(element) {
    console.log(this.renderRoot);
    console.log('resize this grid element', element);
    const grid = this.shadowRoot.querySelector('[grid]');
    console.log('CONTAINER: ', grid);
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'),
      10,
    );

    console.log('WINDOW? ', window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    console.log(`ROW HEIGHT:`, rowHeight);
    console.log(`DeepActive: `, this.deepActiveElement());
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
    console.log(`ROW GAP:`, rowGap);
    console.log(`debug `, this.shadowRoot.querySelector('[grid]').querySelector('[item]'));
    const item = this.shadowRoot.querySelector('[grid]').querySelector('[item]');
    console.log(`item: `, item);
    let height;
    height = (async () => {
      await item.getContentHeight();
    })();

    console.log(`WHERE?!`, height);
    console.log(
      `does it work?`,
      item.getContentHeight().then(data => {
        height = data;
      }),
    );
    console.log(`WHERE?!`, height);
    console.log(`does it work?`, item.getContentWidth());
    // TODO: create element 'conttent' that all content classes can inherit from with a method to return the height
    // elements should be
    // const itemShadow = item.attachShadow({mode: 'open'});
    // console.log(`itemShaow: `, itemShadow);
    // console.log(`did it work? `,itemShadow.querySelector('[content]'));
    const rowSpan = Math.ceil(
      (element.querySelector('[content]').getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap),
    );
    console.log(`ROW SPAN:`, rowSpan);

    // element.style.gridRowEnd = `span ${rowSpan}`;
  }

  _resizeAllGridElements() {
    const allItems = this.shadowRoot.querySelectorAll('[item]');
    // const allItemsArry = Array.from(allItems);
    allItems.forEach(element => this._resizeGridElement(element));
    // console.log('ALL ITEMS', allItemsArry);
    // for (let i = 0; i < allItemsArry.length; i += 1) {
    //   this._resizeGridElement(allItemsArry[i]);
    // }
  }

  //  function resizeAllGridElements(){
  //   allElements = this.shadowRoot.querySelector('#container');
  //   for(x=0;x<allItems.length;x++){
  //      resizeGridItem(allItems[x]);
  //   }
  // }

  deepActiveElement() {
    const element = this.shadowRoot.activeElement;
    console.log(`Active: `, element);
    let elementShadow;
    while (element && element.shadowRoot && element.shadowRoot.activeElement) {
      console.log('TRUE');
      elementShadow = element.shadowRoot.activeElement;
    }
    return elementShadow;
  }

  // deepActiveElement() {
  //   let a = document.activeElement;
  //   while (a && a.shadowRoot && a.shadowRoot.activeElement) {
  //     a = a.shadowRoot.activeElement;
  //   }
  //   return a;
  // }

  static get element() {
    return 'infinite-scroller';
  }

  static get dependencies() {
    return [];
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector('[scrollingWrapper]')
      .addEventListener('scroll', () => this.scroller());

    this.loadMore();
    this._resizeAllGridElements();
    window.addEventListener('resize', this._resizeAllGridItems);
    console.log('first updated');
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

  loadMore() {
    // call method later which will be call to DB
    // This used to be +=, but moved that to another method - this may be innefficient but who knows

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!this.findMore) {
      this.shadowRoot.querySelector('[grid]').innerHTML = this.findMore(this.max);
      // this.shadowRoot.getElementById('grid').childNodes.forEach(element => this._editWidth(element));
      // console.log(this.shadowRoot.getElementById('grid').childNodes.length);
    } else {
      this.shadowRoot.querySelector('[grid]').innerHTML = this._defaultFindMore(this.max);
      // this.shadowRoot.querySelector('[grid]').innerHTML.forEach(element => this._editWidth(element.id));
      // console.log(this.shadowRoot.getElementById('grid').childNodes.length);
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
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 20px;
      }
    `;
  }
}
