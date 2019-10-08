/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePostTags } from '../../../src/components/tcp-blog/create/tcp-create-post-tags';

describe('<[component]>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostTags.register();
      el = await fixture('<[component]/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
