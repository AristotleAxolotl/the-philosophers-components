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
              <post-tags _addedtags='["example","tag"]'>
              </post-tags>
            </div>
          </div>
        </div>
      `);
    });
  });
});
