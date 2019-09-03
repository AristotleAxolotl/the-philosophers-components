import { html, css, LitElement } from 'lit-element';
import './blog/blog-post.js';

class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
    <blog-post></blog-post>
    `;
  }

  static get styles() {
    return css`

    `;
  }
}

customElements.define('the-philosophers-components', ThePhilosophersComponents);
