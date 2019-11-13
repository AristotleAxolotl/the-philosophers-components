/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { Card } from '../../../../src/components/card';

describe('<philosophers-card>', () => {
  describe('default behaviour', () => {
    let el;
    beforeEach(async () => {
      Card.register();
      el = await fixture('<philosophers-card></philosophers-card>');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <div class="content" content="" id="content">
        <div cardwrapper="" id="cardWrapper" medium="">
          <div id="imageWrapper" imagewrapper="">
            <img id="image" src="../../../resources/axolotl.jpg">
          </div>
          <div id="textWrapper" textwrapper="">
            <p text="">
              <slot name="cardText">
              </slot>
            </p>
          </div>
        </div>
      </div>
      `);
    });
  });
  describe('custom behaviour', () => {
    let el;
    beforeEach(async () => {
      Card.register();
      el = await fixture(
        `<philosophers-card cardlink="http://localhost:8000/demo/cardLinkExample" imgSrc="../../example/img/src" cardType="small">
        <span slot="cardText">
          This should be an axolotl?
        </span>
      </philosophers-card>`,
      );
    });
    it('should be able to enter custom text', async () => {
      expect(el).lightDom.to.equal(`
      <span slot="cardText">
        This should be an axolotl?
      </span>`);
    });
    it('should be able to enter a link', async () => {
      expect(el.cardLink).to.equal(`http://localhost:8000/demo/cardLinkExample`);
    });
    it('should be able to set a custom img link', async () => {
      expect(el.imgSrc).to.equal('../../example/img/src');
    });
    it('should be able to switch between preset sizes', async () => {
      expect(el.cardType).to.equal('small');
    });
  });
});
