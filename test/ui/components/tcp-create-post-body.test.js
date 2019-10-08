/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePostBody } from '../../../src/components/tcp-blog/create/tcp-create-post-body';

describe('<[component]>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostBody.register();
      el = await fixture('<[component]/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
