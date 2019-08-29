/* eslint-disable no-unused-expressions */
import '../../../src/components/the-philosophers-components';
import { expect, fixture } from '@open-wc/testing';

describe('<the-philosophers-components>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      el = await fixture('<the-philosophers-components/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <vsm-header level="1">The Philosophers Components</vsm-header>
      `);
    });
  });
});
