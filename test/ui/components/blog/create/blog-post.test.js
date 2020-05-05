/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-nested-callbacks */
import { expect, fixture } from '@open-wc/testing';
import { CreatePost } from '../../../../../src/components/blog/create/blog-post';

describe('<create-blog-post>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePost.register();
      el = await fixture('<create-blog-post></create-blog-post>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
       <create-post-body id="test">
       </create-post-body>
       <button>
         Create
       </button>
       <button>
         Discard
       </button>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePost.register();
      el = await fixture(`
      <blog-post>
        <span slot="mainBodyText">
          Custom Text
        </span>
      </blog-post>`);
    });
    it('should have a custom body text', async () => {
      expect(el).lightDom.to.equal(`
        <span slot="mainBodyText">
          Custom Text
        </span>
        `);
    });
  });
});
