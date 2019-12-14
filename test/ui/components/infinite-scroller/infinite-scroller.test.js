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
    it('should have a property, max, defaulting to 50, doubling to 100 after loading', async () => {
      expect(el.max).to.equal(100);
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <div gridcontainer="">
        <div scrollingwrapper="">
          <div grid="">
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
            <blog-post class="item" id="20" postbody="20">
            </blog-post>
            <blog-post class="item" id="21" postbody="21">
            </blog-post>
            <blog-post class="item" id="22" postbody="22">
            </blog-post>
            <blog-post class="item" id="23" postbody="23">
            </blog-post>
            <blog-post class="item" id="24" postbody="24">
            </blog-post>
            <blog-post class="item" id="25" postbody="25">
            </blog-post>
            <blog-post class="item" id="26" postbody="26">
            </blog-post>
            <blog-post class="item" id="27" postbody="27">
            </blog-post>
            <blog-post class="item" id="28" postbody="28">
            </blog-post>
            <blog-post class="item" id="29" postbody="29">
            </blog-post>
            <blog-post class="item" id="30" postbody="30">
            </blog-post>
            <blog-post class="item" id="31" postbody="31">
            </blog-post>
            <blog-post class="item" id="32" postbody="32">
            </blog-post>
            <blog-post class="item" id="33" postbody="33">
            </blog-post>
            <blog-post class="item" id="34" postbody="34">
            </blog-post>
            <blog-post class="item" id="35" postbody="35">
            </blog-post>
            <blog-post class="item" id="36" postbody="36">
            </blog-post>
            <blog-post class="item" id="37" postbody="37">
            </blog-post>
            <blog-post class="item" id="38" postbody="38">
            </blog-post>
            <blog-post class="item" id="39" postbody="39">
            </blog-post>
            <blog-post class="item" id="40" postbody="40">
            </blog-post>
            <blog-post class="item" id="41" postbody="41">
            </blog-post>
            <blog-post class="item" id="42" postbody="42">
            </blog-post>
            <blog-post class="item" id="43" postbody="43">
            </blog-post>
            <blog-post class="item" id="44" postbody="44">
            </blog-post>
            <blog-post class="item" id="45" postbody="45">
            </blog-post>
            <blog-post class="item" id="46" postbody="46">
            </blog-post>
            <blog-post class="item" id="47" postbody="47">
            </blog-post>
            <blog-post class="item" id="48" postbody="48">
            </blog-post>
            <blog-post class="item" id="49" postbody="49">
            </blog-post>
          </div>
        </div>
      </div>
      `);
    });
    it('should have a default find more method', async () => {
      expect(typeof el.findMore).to.equal('function');
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
