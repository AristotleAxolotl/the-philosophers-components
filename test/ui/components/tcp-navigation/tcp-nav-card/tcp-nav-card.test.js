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
});
