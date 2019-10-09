/* eslint-disable import/extensions */

// const { expect } = require('@open-wc/testing');
// const fixture = require('@open-wc/testing');

import { expect, fixture } from '@open-wc/testing';
import { Post } from '../../../src/components/tcp-blog/tcp-blog-post';

describe('<blog-post>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      Post.register();
      el = await fixture('<blog-post/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <post-body>
        <span slot="mainBodyText">
          [Example Post Text]
        </span>
      </post-body>
      `);
    });
  });
});
