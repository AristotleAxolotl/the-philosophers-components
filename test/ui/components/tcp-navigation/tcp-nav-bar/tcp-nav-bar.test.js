/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { NavBar } from '../../../../../src/components/tcp-navigation/tcp-nav-bar';

describe('<nav-bar>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      NavBar.register();
      el = await fixture('<nav-bar></nav-bar>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div nav-bar>
          <nav-card id="card-0" name="Home?"></nav-card>
          <nav-card id="card-1" name="Blogs"></nav-card>
        </div>
      `);
    });
  });
});
