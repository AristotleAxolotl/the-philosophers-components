/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-nested-callbacks */
import { expect, fixture } from '@open-wc/testing';
import { PostUtilitiesBar } from '../../../../../src/components/blog/display/post-utilities-bar';

describe('<post-utilities-bar>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostUtilitiesBar.register();
      el = await fixture('<post-utilities-bar></post-utlities-bar>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
