/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PostComments } from '../../../src/components/tcp-blog/tcp-post-comments';

describe('<post-comments>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostComments.register();
      el = await fixture('<post-comments/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      `);
    });
  });
});
