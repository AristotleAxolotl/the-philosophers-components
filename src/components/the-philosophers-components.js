import { html, css, LitElement } from 'lit-element';
import './navigation/nav-bar.js';
import './navigation/nav-card.js';
import './blog/blog-post.js';

class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
    <nav-bar></nav-bar>
    <blog-post></blog-post>
    `;
  }

  static get styles() {
    return css`

    `;
  }
}

customElements.define('the-philosophers-components', ThePhilosophersComponents);
