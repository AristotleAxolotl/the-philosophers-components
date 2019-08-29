import { html, LitElement } from 'lit-element';

import '../../vsm-ui-components';

class ThePhilosophersComponents extends LitElement {
  render() {
    return html`
      <vsm-header level="1">The Philosophers Components</vsm-header>
    `;
  }
}

window.customElements.define('the-philosophers-components', ThePhilosophersComponents);
