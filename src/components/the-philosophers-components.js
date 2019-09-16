import { html, css, LitElement } from 'lit-element';
import './navigation/nav-bar.js';
import './blog/blog-post.js';
import './blog/create/create-blog-post.js';

export default class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
    <nav-bar></nav-bar>
    <blog-post></blog-post>
    <create-blog-post></create-blog-post>
    `;
  }

  static get styles() {
    return css`

    `;
  }
}

customElements.define('the-philosophers-components', ThePhilosophersComponents);
