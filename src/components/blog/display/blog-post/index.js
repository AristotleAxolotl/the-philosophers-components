/* eslint-disable import/extensions */
import { html, css } from 'lit-element';
import { PostBody } from '../post-body';
import { utils } from '../../../lib';
import { Content } from '../../../content';
import { CUSTOM_ELEMENT_LOADED } from '../../../../events';

// TODO: post has a body, comment section, upvote/downvote,
// TODO: height is returned incorrectly
// TODO: based on number of characters in text (since everything else stays the same) set height+width
// How to get height of these? its fairly dynamic....
export class BlogPost extends Content {
  static get properties() {
    return {
      postBody: { type: String },
      _loaded: { type: Boolean },
    };
  }

  static get element() {
    return 'blog-post';
  }

  static get dependencies() {
    return [PostBody];
  }

  static register() {
    utils.register(BlogPost);
  }

  render() {
    return html`
      <div content>
        <post-body body>
          <span slot="mainBodyText">${this.postBody}</span>
        </post-body>
      </div>
    `;
  }

  async getContentHeight() {
    if (!this._loaded) {
      console.log('please wait for the element to load before requesting size');
      return;
    }
    const content = this.shadowRoot.querySelector('[content]');
    return content.clientHeight;
  }

  async getContentWidth() {
    if (!this._loaded) {
      console.log('please wait for the element to load before requesting size');
      return;
    }
    const content = this.shadowRoot.querySelector('[content]');
    return content.clientWidth;
  }

  static get styles() {
    return css`
      * {
        margin: 5px;
      }

      [content] {
        display: block;
        height: 100%;
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.postBody = `Lorem ipsum dolor sit amet, ceteros vivendum consulatu ius eu. Ius ei possit delenit necessitatibus. Sea ludus comprehensam ut. Mea saperet corpora complectitur ut, cu agam molestiae mel. Ne ludus malorum tacimates has. Congue animal ei has.

    His quis aeque et. Mei cu efficiantur neglegentur. Feugait cotidieque ei sea. Ad alii putant expetenda mei, iusto commodo moderatius pro ne. Duo case possim philosophia ea, malis commune voluptatibus mea te, mel ubique meliore suscipiantur ea.

    Has ex primis recteque definiebas, elit percipitur mel eu. No vim tation maiorum adversarium, eam amet ullum mediocrem an. Mel fugit aeterno id. Eos dissentiunt theophrastus at, vix enim consul possim et. Sea te exerci eirmod suscipiantur, et sea indoctum urbanitas, per ei illum reformidans referrentur. Quo ut dicit salutandi argumentum. Ei postea regione repudiare sea, ad oporteat menandri incorrupte has, dicat decore antiopam quo et.

    Ei ius tation utroque, eum et possim adipisci. Quas idque dolores eu vim, vix ne feugiat inciderint temporibus. Cibo decore repudiare vix ne, senserit iracundia est ei. Sea simul molestiae eu. Et qui ponderum apeirian, nonumes consectetuer his id. An mel iudico sensibus, pericula omittantur ut eam.

    Te mei eleifend theophrastus, minim putant repudiandae te sed, eam ne nostrud vituperata. Dicat laoreet pro id, id qui fuisset epicuri. Tantas denique facilisis nam at, vis ei populo quaeque accommodare, ei solet oportere his. Mei in tritani dissentiet. Tacimates euripidis honestatis sed an, ut ipsum velit omnium duo. Sed et sonet veniam semper, cum ut virtute recusabo contentiones, nec ut dicit electram.`;

    this._loaded = false;
  }

  connectedCallback() {
    super.connectedCallback();

    // TODO: Resize listeners should probably be in the parent class (i.e. infini-scroller)

    // window.addEventListener('resize', () => {
    //   this._loaded = true;
    // });

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded, blog-post');
      this._loaded = true;
      this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });
  }

  disconnectedCallback() {
    // window.removeEventListener('resize', () => {
    //   this._loaded = false;
    // });

    document.removeEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
      this._loaded = false;
      this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_LOADED);
    });

    super.disconnectedCallback();
  }
}
