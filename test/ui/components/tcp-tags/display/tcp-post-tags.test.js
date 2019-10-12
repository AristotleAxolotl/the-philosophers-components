/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PhilosophersTags } from '../../../../../src/components/tcp-tags/display';

describe('<philosophers-tags>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PhilosophersTags.register();
      el = await fixture('<philosophers-tags></philosophers-tags>');
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
