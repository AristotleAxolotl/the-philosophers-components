/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PostUtilitiesBar } from '../../../src/components/tcp-blog/tcp-post-utilities-bar';

describe('<post-utilities-bar>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostUtilitiesBar.register();
      el = await fixture('<post-utilities-bar/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
