/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePostBody } from '../../../../../src/components/tcp-blog/create/tcp-create-post-body';

describe('<create-post-body>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostBody.register();
      el = await fixture('<create-post-body></create-post-body>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div createpost>
          <div mainbody>
            <textarea inputposttext placeholder="Enter post text here..." rows="7"></textarea>
          </div>
          <div extrainfo>
            <div resourcelink>
              <p subtitle>
                Resource Link:
              </p>
              <input placeholder="Enter resource link here..." type="text">
            </div>
            <div dateofpost>
              <p subtitle>
                Date of post:
              </p>
              <philosophers-date iscreatedate>
              </philosophers-date>
            </div>
            <div tags>
              <p subtitle>
                Tags:
              </p>
              <post-tags isCreatePost _addedtags='["example","tag"]'>
              </post-tags>
            </div>
          </div>
        </div>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostBody.register();
      el = await fixture(
        '<create-post-body postBody="Custom Body Text MAN!!!" resourceLink="https://www.stackoverflow.com/example/resource"></create-post-body>',
      );
    });
    it('should be able to enter body text', async () => {
      expect(el.postBody).to.equal(`Custom Body Text MAN!!!`);
    });
    it('should be able to enter a resource link', async () => {
      expect(el.resourceLink).to.equal(`https://www.stackoverflow.com/example/resource`);
    });
    it('should have a boolean property, isCreatePost, defaulting to true', async () => {
      expect(el.isCreatePost).to.be.true;
    });
  });
});
