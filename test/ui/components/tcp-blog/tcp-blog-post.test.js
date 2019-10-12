/* eslint-disable import/extensions */

// const { expect } = require('@open-wc/testing');
// const fixture = require('@open-wc/testing');

import { expect, fixture } from '@open-wc/testing';
import { Post } from '../../../../src/components/tcp-blog/display';

describe('<blog-post>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      Post.register();
      el = await fixture('<blog-post><blog-post/>');
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
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      Post.register();
      el = await fixture(`
      <blog-post>
        <span slot="mainBodyText">
          Custom Text
        </span>
      </blog-post>`);
    });
    it('should have a custom body text', async () => {
      expect(el).lightDom.to.equal(`
        <span slot="mainBodyText">
          Custom Text
        </span>
        `);
    });
  });
});
