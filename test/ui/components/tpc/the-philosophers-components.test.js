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
        <blog-post></blog-post>
        <create-blog-post></create-blog-post>
      `);
    });
  });
});
