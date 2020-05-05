/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-nested-callbacks */
import { expect, fixture } from '@open-wc/testing';
import { NavBar } from '../../../../../src/components/navigation/nav-bar';

// TODO: add in testing so incorrect data cannot be entered e.g. arrays of wrong sizes

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
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      NavBar.register();
      el = await fixture('<nav-bar></nav-bar>');
      el.navCards.push({ name: 'extraOption', links: './extraOption' });
    });
    it('should allow extra nav cards to be added', async () => {
      expect(el.__navCards).to.eql([
        {
          links: ['/home'],
          name: 'Home?',
        },
        {
          links: ['/my/blog', '/your/blog'],
          name: 'Blogs',
        },
        {
          links: './extraOption',
          name: 'extraOption',
        },
      ]);
    });
  });
});
