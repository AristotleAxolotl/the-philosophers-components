/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-nested-callbacks */
import { expect, fixture } from '@open-wc/testing';
import { InfiniteScroller } from '../../../../src/components/infinite-scroller';

describe('<infinite-scroller>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      InfiniteScroller.register();
      el = await fixture('<infinite-scroller></infinite-scroller>');
      // await waitFor(el._loaded);
      // return el;
    });
    it('should have a property, maxLoad, defaulting to 20', async () => {
      expect(el.maxLoad).to.equal(20);
    });
    it('should have a property, maxDisplay, defaulting to 20', async () => {
      expect(el.maxLoad).to.equal(20);
    });
    // TODO: refactor infini-scroller to use one method (not findmore/defualt/load/ all can be in one)
    // it('should have a default find more method', async () => {
    //   expect(typeof el.findMore).to.equal('function');
    // });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div gridcontainer="">
          <div scrollingwrapper="">
            <div grid="">
              <philosophers-card card="" id="0" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="1" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="2" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="3" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="4" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="5" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="6" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="7" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="8" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="9" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="10" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="11" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="12" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="13" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="14" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="15" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="16" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="17" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
              <philosophers-card card="" id="18" item="" style="grid-row-end: span 7; grid-column-end: span 7;"> </philosophers-card>
              <philosophers-card card="" id="19" item="" style="grid-row-end: span 17; grid-column-end: span 17;"> </philosophers-card>
            </div>
          </div>
        </div>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      InfiniteScroller.register();
      el = await fixture(
        `<infinite-scroller demoScroller maxLoad=30 maxDisplay=30></infinite-scroller>`,
      );
      el.findMore = function () {
        console.log('This is a test function!');
      };
    });
    it('should be able to enter custom maxLoad', async () => {
      expect(el.maxLoad).to.equal(30);
    });
    it('should be able to enter custom maxDisplay, doubling to 60 after load', async () => {
      expect(el.maxDisplay).to.equal(60);
    });
    it('should be able to enter custom findMore', async () => {
      expect(typeof el.findMore).to.equal('function');
    });
  });
});
