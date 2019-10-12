/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { PhilosophersDate } from '../../../../../src/components/tcp-date/display';

function _toDoubleIntFormat(int) {
  let newInt;
  // console.log(typeof int)
  if (int < 10) {
    newInt = `0${int}`;
    return newInt;
  }
  if (int.toString().length > 2) {
    newInt = int.toString().slice(-2);
    return newInt;
  }
  return int;
}

describe('<philosophers-date>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      PhilosophersDate.register();
      el = await fixture('<philosophers-date></philosophers-date>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
        <div wrapper>
          <div datewrapper>
            <input date day max="99" min="1" readonly type="number" value="${_toDoubleIntFormat(
              new Date().getDate(),
            )}">
            <label slash>
              /
            </label>
            <input date max="99" min="1" month readonly type="number" value="${_toDoubleIntFormat(
              new Date().getMonth(),
            )}">
            <label slash>
              /
            </label>
            <input date max="9999" min="1" readonly type="number" value="${new Date().getFullYear()}" year>
          </div>
          <div timewrapper>
            <label>
              @
            </label>
            <input hour max="99" min="1" readonly time type="number" value="${_toDoubleIntFormat(
              new Date().getHours(),
            )}">
            <label colon>
              :
            </label>
            <input max="99" min="1" minuet readonly time type="number" value="${_toDoubleIntFormat(
              new Date().getMinutes(),
            )}">
            <label colon>
              :
            </label>
            <input max="99" min="1" readonly second time type="number" value="${_toDoubleIntFormat(
              new Date().getSeconds(),
            )}">
          </div>
        </div>
      `);
    });
  });
});
