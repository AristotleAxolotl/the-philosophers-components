/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PostBody } from '../../../../../src/components/tcp-blog/display';

describe('<post-body>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PostBody.register();
      el = await fixture('<post-body></post-body>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div post>
          <div mainbody>
            <p posttext>
              [Example Post Text]
            </p>
          </div>
          <div extrainfo>
            <div resourcelink>
              <p subtitle>
                Resource Link:
              </p>
              <a href="default resource">
                Resource
              </a>
            </div>
            <div dateofpost>
              <p subtitle>
                Date of post:
              </p>
              <philosophers-date>
              </philosophers-date>
            </div>
            <div tags>
              <p subtitle>
                Tags:
              </p>
              <philosophers-tags _addedtags='["example","tag"]'>
              </philosphers-tags>
            </div>
          </div>
        </div>
      `);
    });
  });
  describe('custom behaviour', async () => {
    let el;
    beforeEach(async () => {
      PostBody.register();
      el = await fixture(
        '<post-body postBody="My very own custom body" resourceLink="https://www.stackoverflow.com/my/very/helpful/link"></post-body>',
      );
    });
    it('should have a body text set to "My very own custom body"', async () => {
      expect(el.postBody).to.equal('My very own custom body');
    });
    it('should have a resource link to aid issue', async () => {
      expect(el.resourceLink).to.equal('https://www.stackoverflow.com/my/very/helpful/link');
    });
  });
});
