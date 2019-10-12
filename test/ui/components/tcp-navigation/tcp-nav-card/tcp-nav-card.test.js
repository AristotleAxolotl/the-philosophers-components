/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { NavCard } from '../../../../../src/components/tcp-navigation/tcp-nav-card';

describe('<nav-card>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      NavCard.register();
      el = await fixture('<nav-card></nav-card>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
       <div nav-card>
         <div dropdown>
           <button dropbtn>
             Home
             <i arrow down></i>
           </button>
           <div dropdown-content>
             <a href="/index">/index</a>
             <a href="/test">/test</a>
           </div>
         </div>
       </div>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      NavCard.register();
      el = await fixture('<nav-card name="cusom"></nav-card>');
    });
    it('should allow a name to be set', async () => {
      expect(el.name).to.equal('cusom');
    });
  });
  describe('type of card: single', async () => {
    let el;
    beforeEach(async () => {
      NavCard.register();
      el = await fixture('<nav-card name="custom" resourceLinks=["/customLink"]></nav-card>');
    });
    it('should render as a normal card', async () => {
      expect(el).shadowDom.to.equal(`
      <div nav-card="">
        <a href="/customLink">
          custom
        </a>
      </div>
      `);
    });
  });
  describe('type of card: dropdown', async () => {
    let el;
    beforeEach(async () => {
      NavCard.register();
      el = await fixture(
        `<nav-card name="custom" resourceLinks='["/customLink", "/customLinkTwo"]'></nav-card>`,
      );
    });
    it('should render as a dropdown card', async () => {
      expect(el).shadowDom.to.equal(`
      <div nav-card="">
        <div dropdown="">
          <button dropbtn="">
            custom
            <i
              arrow=""
              down=""
            >
            </i>
          </button>
          <div dropdown-content="">
            <a href="/customLink">
              /customLink
            </a>
            <a href="/customLinkTwo">
              /customLinkTwo
            </a>
          </div>
        </div>
      </div>
      `);
    });
  });
});
