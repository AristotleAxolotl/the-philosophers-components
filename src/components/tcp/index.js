/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../tcp-navigation';
import { Post } from '../tcp-blog/display';
import { CreatePost } from '../tcp-blog/create';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <blog-post></blog-post>
      <create-blog-post></create-blog-post>
    `;
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [NavBar, Post, CreatePost];
  }

  static register() {
    utils.register(ThePhilosophersComponents);
  }

  static get styles() {
    return css``;
  }
}

// customElements.define('the-philosophers-components', ThePhilosophersComponents);
