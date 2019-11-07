/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { CreatePostBody } from '../../../../../src/components/blog/create/post-body';

describe('<create-post-body>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      CreatePostBody.register();
      el = await fixture('<create-post-body></create-post-body>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div createpost id="createPost">
          <div mainbody id="mainBody">
            <textarea inputposttext id="inputPostText" placeholder="Enter post text here..." rows="7"></textarea>
          </div>
          <div extrainfo id="extraInfo">
            <div resourcelink id="resourceLink">
              <p subtitle>
                Resource Link:
              </p>
              <input id="resourceInput" placeholder="Enter resource link here..." type="text">
            </div>
            <div dateofpost id="dateOfPost">
              <p subtitle>
                Date of post:
              </p>
              <create-philosophers-date id="createDate">
              </create-philosophers-date>
            </div>
            <div tags id="tags">
              <p subtitle>
                Tags:
              </p>
              <create-philosophers-tags id="createTags" _addedtags='["example","tag"]'>
              </create-philosphers-tags>
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
  });
});
