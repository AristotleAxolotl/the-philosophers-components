/* eslint-disable import/extensions */
/* eslint-disable max-nested-callbacks */

import { expect, fixture } from '@open-wc/testing';
import { BlogPost } from '../../../../../src/components/blog/display';

import { waitFor } from '../../../common/timings';

describe('<blog-post>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      BlogPost.register();
      el = await fixture('<blog-post><blog-post/>');
      await waitFor(el._loaded);
      return el;
    });
    it('should have a recommended width attribute', () => {
      expect(el.recWidth).to.equal(790);
    });
    it('should have a recommended height attribute', () => {
      expect(el.recHeight).to.equal(647);
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <div content="">
        <post-body body>
          <span slot="mainBodyText">
            Lorem ipsum dolor sit amet, ceteros vivendum consulatu ius eu. Ius ei possit delenit necessitatibus. Sea ludus comprehensam ut. Mea saperet corpora complectitur ut, cu agam molestiae mel. Ne ludus malorum tacimates has. Congue animal ei has.

    His quis aeque et. Mei cu efficiantur neglegentur. Feugait cotidieque ei sea. Ad alii putant expetenda mei, iusto commodo moderatius pro ne. Duo case possim philosophia ea, malis commune voluptatibus mea te, mel ubique meliore suscipiantur ea.

    Has ex primis recteque definiebas, elit percipitur mel eu. No vim tation maiorum adversarium, eam amet ullum mediocrem an. Mel fugit aeterno id. Eos dissentiunt theophrastus at, vix enim consul possim et. Sea te exerci eirmod suscipiantur, et sea indoctum urbanitas, per ei illum reformidans referrentur. Quo ut dicit salutandi argumentum. Ei postea regione repudiare sea, ad oporteat menandri incorrupte has, dicat decore antiopam quo et.

    Ei ius tation utroque, eum et possim adipisci. Quas idque dolores eu vim, vix ne feugiat inciderint temporibus. Cibo decore repudiare vix ne, senserit iracundia est ei. Sea simul molestiae eu. Et qui ponderum apeirian, nonumes consectetuer his id. An mel iudico sensibus, pericula omittantur ut eam.

    Te mei eleifend theophrastus, minim putant repudiandae te sed, eam ne nostrud vituperata. Dicat laoreet pro id, id qui fuisset epicuri. Tantas denique facilisis nam at, vis ei populo quaeque accommodare, ei solet oportere his. Mei in tritani dissentiet. Tacimates euripidis honestatis sed an, ut ipsum velit omnium duo. Sed et sonet veniam semper, cum ut virtute recusabo contentiones, nec ut dicit electram.
        </span>
      </post-body>
    </div>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      BlogPost.register();
      el = await fixture(`
      <blog-post>
        <span slot="mainBodyText">
          Custom Text
        </span>
      </blog-post>`);
    });
    it('should have a custom body text', async () => {
      expect(el).lightDom.to.equal(`
        <span slot="mainBodyText">
          Custom Text
        </span>
        `);
    });
  });
});
