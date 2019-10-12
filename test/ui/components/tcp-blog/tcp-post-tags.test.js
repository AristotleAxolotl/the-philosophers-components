/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PostTags } from '../../../../src/components/tcp-blog/tcp-post-tags';

describe('<post-tags>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostTags.register();
      el = await fixture('<post-tags></post-tags>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div tags>
          <div tagwrapper>
            <span id="tag-0" tag>
              example
            </span>
          </div>
          <div tagwrapper>
            <span id="tag-1" tag>
              tag
            </span>
          </div>
        </div>
      `);
    });
  });
});
