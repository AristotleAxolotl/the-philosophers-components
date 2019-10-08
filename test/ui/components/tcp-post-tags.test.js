/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PostTags } from '../../../src/components/tcp-blog/tcp-post-tags';

describe('<[component]>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostTags.register();
      el = await fixture('<[component]/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
