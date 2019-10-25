/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../navigation';
import { Post } from '../blog/display';
import { CreatePost } from '../blog/create';
import { InfiniteScroller } from '../infinite-page-scroller';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <blog-post>
        <span slot="mainBodyText">
          text yo
        </span></blog-post
      >
      <create-blog-post></create-blog-post>
      <infinite-scroller></infinite-scroller>
    `;
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [NavBar, Post, CreatePost, InfiniteScroller];
  }

  static register() {
    utils.register(ThePhilosophersComponents);
  }

  static get styles() {
    return css``;
  }
}

// customElements.define('the-philosophers-components', ThePhilosophersComponents);
