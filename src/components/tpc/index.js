/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../navigation';
import { BlogPost } from '../blog/display';
import { CreatePost } from '../blog/create';
import { InfiniteScroller } from '../infinite-scroller';
import { Card } from '../card';
import { Image } from '../image';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <philosophers-card cardLink="http://localhost:8000/demo/cardLinkExample" cardType="small">
        <span slot="cardText">
          This should be an axolotl?
        </span>
      </philosophers-card>
      <div postContainer>
        <blog-post demoPost>
          <!-- <blog-post demoPost postBody="main body yo"> -->
        </blog-post>
      </div>
      <create-blog-post></create-blog-post>
      <div imageContainer>
        <philosophers-image></philosophers-image>
      </div>
      <infinite-scroller demoScroller maxLoad=20 maxDisplay=20></infinite-scroller>
    `;
  }

  methodToGetCards(noToLoad, noToShow) {
    let extraLoaded;
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      extraLoaded += `
      <philosophers-card item card id=${i} cardLink="http://localhost:8000/demo/cardLinkExample" cardSize='${
        i % 2 === 0
          ? `{ "width": "200px", "height": "200px"}`
          : `{ "width": "500px", "height": "500px" }`
      }'>
        <span slot="cardText">
          ${i}
        </span>
      </philosophers-card>
      `;
    }
    return extraLoaded;
  }


  // this is refering to component in infiniscroller, maybe should grab the element &doit?
  methodToGetBlogPosts(noToLoad, noToShow) {
    let extraLoaded;
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      extraLoaded += `
      <blog-post item post id=${i}>
          <!-- <blog-post demoPost postBody="main body yo"> -->
        </blog-post>
      `;
    }
    return extraLoaded;
  }

  firstUpdated() {
    // this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetBlogPosts;
    this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetCards;


    const targetNode = this.shadowRoot.querySelector('[demoPost]');

    targetNode.addEventListener('custom-element-loaded', e => {
      console.log(e.detail);
      console.log('Demo post height: ', e.target.getContentHeight());
      console.log('Demo post width: ', e.target.getContentWidth());
    });
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [NavBar, BlogPost, CreatePost, InfiniteScroller, Card, Image];
  }

  static register() {
    utils.register(ThePhilosophersComponents);
  }

  static get styles() {
    return css`
      [imageContainer] {
        height: 200px;
        width: 400px;
      }

      [postContainer] {
        width: 100%;
        height: 100%;
      }
    `;
  }
}
