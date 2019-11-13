/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { InfiniteScroller } from '../../../../src/components/infinite-scroller';

describe('<infinite-scroller>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      InfiniteScroller.register();
      el = await fixture('<infinite-scroller id="demoScroller"></infinite-scroller>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <div container="" id="container">
        <div id="scrollingWrapper" scrollingwrapper="">
          <div grid="" id="grid">
            <blog-post class="item" id="0" postbody="0">
            </blog-post>
            <blog-post class="item" id="1" postbody="1">
            </blog-post>
            <blog-post class="item" id="2" postbody="2">
            </blog-post>
            <blog-post class="item" id="3" postbody="3">
            </blog-post>
            <blog-post class="item" id="4" postbody="4">
            </blog-post>
            <blog-post class="item" id="5" postbody="5">
            </blog-post>
            <blog-post class="item" id="6" postbody="6">
            </blog-post>
            <blog-post class="item" id="7" postbody="7">
            </blog-post>
            <blog-post class="item" id="8" postbody="8">
            </blog-post>
            <blog-post class="item" id="9" postbody="9">
            </blog-post>
            <blog-post class="item" id="10" postbody="10">
            </blog-post>
            <blog-post class="item" id="11"postbody="11">
            </blog-post>
            <blog-post class="item" id="12" postbody="12">
            </blog-post>
            <blog-post class="item" id="13" postbody="13">
            </blog-post>
            <blog-post class="item" id="14" postbody="14">
            </blog-post>
            <blog-post class="item" id="15" postbody="15">
            </blog-post>
            <blog-post class="item" id="16" postbody="16">
            </blog-post>
            <blog-post class="item" id="17" postbody="17">
            </blog-post>
            <blog-post class="item" id="18" postbody="18">
            </blog-post>
            <blog-post class="item" id="19" postbody="19">
            </blog-post>
          </div>
        </div>
      </div>
      `);
    });
    it('should have a default find more method', async () => {
      expect(typeof el.findMore).to.equal('function');
    });
    it('should have a property, max, defaulting to 20', async () => {
      expect(el.max).to.equal(40);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      InfiniteScroller.register();
      el = await fixture(`<infinite-scroller id="demoScroller" max=30></infinite-scroller>`);
    });
    it('should be able to enter custom max', async () => {
      expect(el.max).to.equal(60);
    });
  });
});
