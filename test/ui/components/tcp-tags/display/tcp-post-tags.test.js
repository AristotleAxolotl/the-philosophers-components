/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { Tags } from '../../../../../src/components/tcp-tags/display';

describe('<post-tags>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      Tags.register();
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
