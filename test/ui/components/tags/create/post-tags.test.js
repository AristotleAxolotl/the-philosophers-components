/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-nested-callbacks */
import { expect, fixture } from '@open-wc/testing';
import { CreatePhilosophersTags } from '../../../../../src/components/tags/create';

describe('<create-philosophers-tags>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePhilosophersTags.register();
      el = await fixture('<create-philosophers-tags></create-philosophers-tags>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div tags>
          <span id="tag-0" tag>
            example
          </span>
          <span id="tag-1" tag>
            tag
          </span>
          <input
          id="inputTag"
          inputtag keys="enter"
          placeholder="Add a tag..."
          type="text">
        </div>
      `);
    });
    it('should have property _addedTags defaulting to [example, tag]', async () => {
      expect(el._addedTags).to.eql(['example', 'tag']);
    });
  });
  // TODO: weird shit happening. click event wiping _addedTags etc. fix blegh.
  describe('event behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePhilosophersTags.register();
      el = await fixture('<create-philosophers-tags></create-philosophers-tags>');
    });
    // TODO: I dont think this is the best. I'm calling the method instead of testing the event.
    it('should create a new tag on enter', async () => {
      el.shadowRoot.querySelector('#inputTag').value = 'newTag';

      const event = new KeyboardEvent('keyup', {
        key: 'Enter',
      });

      el.shadowRoot.querySelector('#inputTag').dispatchEvent(event);

      expect(el._addedTags).to.eql(['example', 'tag', 'newTag']);
    });
    // it('should remove an added tag when it is clicked on', async () => {
    //   el.shadowRoot.getElementById('tag-1').click();
    //   expect(``).shadowDom.to.equal(``);
    // });
  });
});
