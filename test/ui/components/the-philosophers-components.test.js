/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { ThePhilosophersComponents } from '../../../src/components/tcp';

describe('<the-philosophers-components>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      ThePhilosophersComponents.register();
      el = await fixture('<the-philosophers-components/>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <vsm-header level="1">The Philosophers Components</vsm-header>
      `);
    });
  });
});
