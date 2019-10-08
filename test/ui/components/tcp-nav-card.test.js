/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { NavCard } from '../../../src/components/tcp-navigation/tcp-nav-card';

describe('<[component]>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      NavCard.register();
      el = await fixture('<[component]/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
