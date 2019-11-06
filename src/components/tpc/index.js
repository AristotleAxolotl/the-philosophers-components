/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../navigation';
import { Post } from '../blog/display';
import { CreatePost } from '../blog/create';
import { InfiniteScroller } from '../infinite-scroller';
import { Card } from '../card';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <philosophers-card cardLink="http://localhost:8000/demo/cardLinkExample">
        <span slot="cardText">
          This should be an axolotl?
        </span>
      </philosophers-card>
      <blog-post>
        <span slot="mainBodyText">
          text yo
        </span></blog-post
      >
      <create-blog-post></create-blog-post>
      <infinite-scroller id="demoScroller"></infinite-scroller>
    `;
  }

  methodToGet(noToGet) {
    for (let i = noToGet - 20; i < noToGet; i += 1) {
      this.component += `
      <philosophers-card cardLink="http://localhost:8000/demo/cardLinkExample">
        <span slot="cardText">
          ${i}
        </span>
      </philosophers-card>
      `;
    }
    return this.component;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('#demoScroller').findMore = this.methodToGet;
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [NavBar, Post, CreatePost, InfiniteScroller, Card];
  }

  static register() {
    utils.register(ThePhilosophersComponents);
  }

  static get styles() {
    return css``;
  }
}

// customElements.define('the-philosophers-components', ThePhilosophersComponents);
