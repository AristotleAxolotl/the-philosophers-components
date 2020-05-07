/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';

import { NavBar } from '../navigation';
import { BlogPost } from '../blog/display';
import { CreatePost } from '../blog/create';
import { InfiniteScroller } from '../infinite-scroller';
import { ImageCard, TextCard } from '../card';
import { ImageCss, ImageHtml } from '../image';
import { TopBanner } from '../banner';
import { PhilosophersHeader } from '../header';

import { utils } from '../lib';

export class ThePhilosophersComponents extends LitElement {
  static get properties() {
    return {
      _loaded: { type: Boolean },
    };
  }

  render() {
    return html`
      <top-banner successMessage bannerText="You pressed the Create button!"></top-banner>
      <nav-bar
        .navCards=${[
          { name: 'home', links: ['/'] },
          { name: 'blog', links: ['/blog', '/blog/create'] },
          { name: 'projects', links: ['/projects'] },
        ]}
      ></nav-bar>
      <philosophers-header level="5">HELLO WORLD!</philosophers-header>
      <philosophers-image-card cardLink="http://localhost:8000/demo/cardLinkExample">
        <span slot="cardText">
          This should be an axolotl?
        </span>
      </philosophers-image-card>
      <philosophers-text-card
        cardWidth="100%"
        cardHeight="100%"
        cardLink="http://localhost:8000/demo/cardLinkExample"
        ><span slot="cardText"
          >Lorem ipsum dolor sit amet, ceteros vivendum consulatu ius eu. Ius ei possit delenit
          necessitatibus. Sea ludus comprehensam ut. Mea saperet corpora complectitur ut, cu agam
          molestiae mel. Ne ludus malorum tacimates has. Congue animal ei has. His quis aeque et.
          Mei cu efficiantur neglegentur. Feugait cotidieque ei sea. Ad alii putant expetenda mei,
          iusto commodo moderatius pro ne. Duo case possim philosophia ea, malis commune
          voluptatibus mea te, mel ubique meliore suscipiantur ea. Has ex primis recteque
          definiebas, elit percipitur mel eu. No vim tation maiorum adversarium, eam amet ullum
          mediocrem an. Mel fugit aeterno id. Eos dissentiunt theophrastus at, vix enim consul
          possim et. Sea te exerci eirmod suscipiantur, et sea indoctum urbanitas, per ei illum
          reformidans referrentur. Quo ut dicit salutandi argumentum. Ei postea regione repudiare
          sea, ad oporteat menandri incorrupte has, dicat decore antiopam quo et. Ei ius tation
          utroque, eum et possim adipisci. Quas idque dolores eu vim, vix ne feugiat inciderint
          temporibus. Cibo decore repudiare vix ne, senserit iracundia est ei. Sea simul molestiae
          eu. Et qui ponderum apeirian, nonumes consectetuer his id. An mel iudico sensibus,
          pericula omittantur ut eam. Te mei eleifend theophrastus, minim putant repudiandae te sed,
          eam ne nostrud vituperata. Dicat laoreet pro id, id qui fuisset epicuri. Tantas denique
          facilisis nam at, vis ei populo quaeque accommodare, ei solet oportere his. Mei in tritani
          dissentiet. Tacimates euripidis honestatis sed an, ut ipsum velit omnium duo. Sed et sonet
          veniam semper, cum ut virtute recusabo contentiones, nec ut dicit electram.</span
        ></philosophers-text-card
      >
      <div postContainer>
        <blog-post demoPost> </blog-post>
      </div>
      <create-blog-post demoCreatePost></create-blog-post>
      <div imageContainer>
        <philosophers-image-css></philosophers-image-css>
      </div>
      <div imageContainer><philosophers-image-html></philosophers-image-html></div>
      <infinite-scroller demoScroller maxLoad="20" maxDisplay="20"></infinite-scroller>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  methodToGetCards(noToShow, noToLoad) {
    const elementList = [];
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      const element = document.createElement('philosophers-card');

      element.id = i;
      element.cardLink = 'http://localhost:8000/demo/cardLinkExample';
      element.cardWidth = i % 2 === 0 ? '200px' : '500px';
      element.cardHeight = i % 2 === 0 ? '200px' : '500px';

      const card = document.createAttribute('card');
      const item = document.createAttribute('item');

      element.setAttributeNodeNS(card);
      element.setAttributeNodeNS(item);
      element.cardText = i;
      // element.addEventListener('custom-element-loaded', e => {
      //   console.log('infini-scroller ', e.detail);
      //   console.log('height: ', e.target.getContentHeight());
      //   console.log('width: ', e.target.getContentWidth());
      //   // console.log('rec? ', e.target._getRecommendedDimensions());
      //   this._resizeGridElement(element);
      // });
      elementList.push(element);
    }
    return elementList;
  }

  // this is refering to component in infiniscroller, maybe should grab the element &doit?
  // eslint-disable-next-line class-methods-use-this
  methodToGetBlogPosts(noToShow, noToLoad) {
    const elementList = [];
    for (let i = noToShow - noToLoad; i < noToShow; i += 1) {
      const element = document.createElement('blog-post');

      element.id = i;
      // element.cardLink = 'http://localhost:8000/demo/cardLinkExample';
      // element.cardWidth = i % 2 === 0 ? '200px' : '500px';
      // element.cardHeight = i % 2 === 0 ? '200px' : '500px';

      const post = document.createAttribute('post');
      const item = document.createAttribute('item');

      element.setAttributeNodeNS(post);
      element.setAttributeNodeNS(item);
      // element.addEventListener('custom-element-loaded', e => {
      //   console.log('infini-scroller ', e.detail);
      //   console.log('height: ', e.target.getContentHeight());
      //   console.log('width: ', e.target.getContentWidth());
      //   // console.log('rec? ', e.target._getRecommendedDimensions());
      //   this._resizeGridElement(element);
      // });
      elementList.push(element);
    }
    return elementList;
  }

  methodToCreatePosts() {
    const successMessage = this.shadowRoot.querySelector('[successMessage]');
    successMessage.showFor(5000);
    // successMessage.toggle();
  }

  firstUpdated() {
    // this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetBlogPosts;
    // this.shadowRoot.querySelector('[demoScroller]').findMore = this.methodToGetCards;

    this.shadowRoot.querySelector('[demoCreatePost]').createPost = this.methodToCreatePosts.bind(
      this,
    );

    const demoPost = this.shadowRoot.querySelector('[demoPost]');

    demoPost.addEventListener('custom-element-loaded', e => {
      console.log(e.detail);
      console.log('Demo post height: ', e.target.getContentHeight());
      console.log('Demo post width: ', e.target.getContentWidth());
    });
  }

  updated() {
    if (!this._loaded) this._loaded = true;
    // this.shadowRoot.querySelector('[content]').dispatchEvent(CUSTOM_ELEMENT_UPDATED);
  }

  static get element() {
    return 'the-philosophers-components';
  }

  static get dependencies() {
    return [
      NavBar,
      BlogPost,
      CreatePost,
      InfiniteScroller,
      ImageCard,
      TextCard,
      ImageCss,
      ImageHtml,
      TopBanner,
      PhilosophersHeader,
    ];
  }

  static register() {
    utils.register(ThePhilosophersComponents);
  }

  static get styles() {
    return css`
      [imageContainer] {
        height: 200px;
        width: 400px;
      }

      [postContainer] {
        width: 100%;
        height: 100%;
      }

      philosophers-text-card {
        /* color: white; */
      }
    `;
  }
}
