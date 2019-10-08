/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { NavBar } from '../../../src/components/tcp-navigation/tcp-nav-bar';

describe('<[component]>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      NavBar.register();
      el = await fixture('<[component]/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
