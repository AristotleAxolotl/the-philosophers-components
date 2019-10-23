/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PhilosophersTags } from '../../../../../src/components/tags/display';

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
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      PhilosophersTags.register();
      el = await fixture(
        `<philosophers-tags _addedTags='["test", "one", "two"]'></philosophers-tags>`,
      );
    });
    it('should display custom tags', async () => {
      expect(el).shadowDom.to.equal(`
      <div tags="">
        <div tagwrapper="">
          <span
            id="tag-0"
            tag=""
          >
            test
          </span>
        </div>
        <div tagwrapper="">
          <span
            id="tag-1"
            tag=""
          >
            one
          </span>
        </div>
        <div tagwrapper="">
          <span
            id="tag-2"
            tag=""
          >
            two
          </span>
        </div>
      </div>
      `);
    });
  });
});
