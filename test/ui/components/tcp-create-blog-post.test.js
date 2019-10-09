/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePost } from '../../../src/components/tcp-blog/create/tcp-create-blog-post';

describe('<create-blog-post>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePost.register();
      el = await fixture('<create-blog-post/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
       <create-post-body>
         <span slot="mainBodyText">
           Enter your post text here...
         </span>
       </create-post-body>
      `);
    });
  });
});
