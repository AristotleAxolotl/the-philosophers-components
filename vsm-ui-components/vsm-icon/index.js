import { css, LitElement } from 'lit-element';

import { all as icons } from './icons';

export default class VsmIcon extends LitElement {
  static get properties() {
    return {
      image: { type: String },
    };
  }

  static get styles() {
    return [
      ...icons,
      css`
        :host {
          display: block;
          height: 100%;
          width: 100%;
          background-position: 50% 50%;
          background-size: 75%;
          background-repeat: no-repeat;
          background-color: transparent;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.image = '';
  }
}

window.customElements.define('vsm-icon', VsmIcon);
