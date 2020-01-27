/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../navigation';
import { BlogPost } from '../blog/display';
import { CreatePost } from '../blog/create';
import { InfiniteScroller } from '../infinite-scroller';
import { Card } from '../card';
import { Image } from '../image';
import { TopBanner } from '../banner';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  static get properties() {
    return {
      _loaded: { type: Boolean },
    };
  }

  render() {
    return html`
      <top-banner successMessage bannerText='You pressed the Create button!'></top-banner>
      <nav-bar
        navCards='[ { "name": "home", "links": ["/"] }, { "name": "blog", "links": ["/blog", "/blog/create"] }, { "name": "projects", "links": ["/projects"] } ]'
      ></nav-bar>
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
      <create-blog-post demoCreatePost></create-blog-post>
      <div imageContainer>
        <philosophers-image></philosophers-image>
      </div>
      <infinite-scroller demoScroller maxLoad="20" maxDisplay="20"></infinite-scroller>
    `;
  }

  methodToGetCards(noToShow, noToLoad) {
    const elementList = [];
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      const element = document.createElement('philosophers-card');

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

  // this is refering to component in infiniscroller, maybe should grab the element &doit?
  methodToGetBlogPosts(noToShow, noToLoad, klass) {
    const elementList = [];
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      const element = document.createElement('blog-post');

      element.id = i;
      // element.cardLink = 'http://localhost:8000/demo/cardLinkExample';
      // element.cardWidth = i % 2 === 0 ? '200px' : '500px';
      // element.cardHeight = i % 2 === 0 ? '200px' : '500px';

      const post = document.createAttribute('post');
      const item = document.createAttribute('item');

      element.setAttributeNodeNS(post);
      element.setAttributeNodeNS(item);
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

  methodToCreatePosts(post) {
    const successMessage = this.shadowRoot.querySelector('[successMessage]');
    successMessage.showFor(5000);
    // successMessage.toggle();
  }

  firstUpdated() {
    // this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetBlogPosts;
    // this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetCards;

    this.shadowRoot.querySelector('[demoCreatePost]').createPost = this.methodToCreatePosts.bind(this);

    const demoPost = this.shadowRoot.querySelector('[demoPost]');

    demoPost.addEventListener('custom-element-loaded', e => {
      console.log(e.detail);
      console.log('Demo post height: ', e.target.getContentHeight());
      console.log('Demo post width: ', e.target.getContentWidth());
    });
  }

  updated() {
    if (!this._loaded) this._loaded = true;
    // this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_UPDATED);
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [NavBar, BlogPost, CreatePost, InfiniteScroller, Card, Image, TopBanner];
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
