/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePostTags } from '../../../src/components/tcp-blog/create/tcp-create-post-tags';

describe('<create-post-tags>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostTags.register();
      el = await fixture('<create-post-tags/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div tags="">
          <span
            id="tag-0"
            tag=""
          >
            example
          </span>
          <span
            id="tag-1"
            tag=""
          >
            tag
          </span>
          <input
            id="inputTag"
            inputtag=""
            keys="enter"
            on-keys-pressed="() => {
            this._handleEnter();
          }"
            placeholder="Add a tag..."
            type="text"
          >
        </div>
      `);
    });
  });
});
