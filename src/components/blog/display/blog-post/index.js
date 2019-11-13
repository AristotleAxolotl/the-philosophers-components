/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { PostBody } from '../post-body';
import { utils } from '../../../lib';

// TODO: post has a body, comment section, upvote/downvote,
export class Post extends LitElement {
  static get properties() {
    return {
      postBody: { type: String },
    };
  }

  static get element() {
    return 'blog-post';
  }

  static get dependencies() {
    return [PostBody];
  }

  static register() {
    utils.register(Post);
  }

  render() {
    return html`
      <div content class="content">
        <post-body>
          <span slot="mainBodyText">${this.postBody}</span>
        </post-body>
      </div>
    `;
  }

  static get styles() {
    return css`
      * {
        margin: 5px;
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
  }
}

// customElements.define('blog-post', Post);
