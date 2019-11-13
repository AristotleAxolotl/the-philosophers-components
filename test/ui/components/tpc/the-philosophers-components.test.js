/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { ThePhilosophersComponents } from '../../../../src/components/tpc';

describe('<the-philosophers-components>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      ThePhilosophersComponents.register();
      el = await fixture('<the-philosophers-components></the-philosophers-components>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <nav-bar></nav-bar>
        <philosophers-card cardlink="http://localhost:8000/demo/cardLinkExample" cardType="small">
          <span slot="cardText">
            This should be an axolotl?
          </span>
        </philosophers-card>
        <blog-post>
          <span slot="mainBodyText">
            text yo
          </span>
        </blog-post>
        <create-blog-post></create-blog-post>
        <infinite-scroller id="demoScroller"></infinite-scroller>
      `);
    });
  });
});
