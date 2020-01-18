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
    it('should have a default text', async () => {
      expect(el).lightDom.to.equal(`
      `);
    });
    it('should have a default link', async () => {
      expect(el.cardLink).to.equal(`http://localhost:8000/demo/cardLink`);
    });
    it('should have a default image link', async () => {
      expect(el.imgSrc).to.equal('../../../resources/images/axolotl.jpg');
    });
    it('should have an attribute, cardHeight, defaulting to 200px', async () => {
      expect(el.cardHeight).to.equal('200px');
    });
    it('should have an attribute, cardWidth, defaulting to 200px', async () => {
      expect(el.cardWidth).to.equal('200px');
    });
    it('should output the correct structure', async () => {
      expect(el).shadowDom.to.equal(`
      <div cardWrapper content style="width: 200px; height: 200px;">
        <div imagewrapper>
          <philosophers-image image imgsrc="../../../resources/images/axolotl.jpg"
            style='background-image: url("../../../resources/images/axolotl.jpg");'>
          </philosophers-image>
        </div>
        <div textwrapper>
          <p text>
            <slot name="cardText">
            </slot>
          </p>
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
        `<philosophers-card cardlink="http://localhost:8000/demo/cardLinkExample" imgSrc="../../example/img/src" cardHeight='500px' cardWidth='500px'>
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
    it('should be able to enter a custom height', async () => {
      expect(el.cardHeight).to.equal('500px');
    });
    it('should be able to enter a custom width', async () => {
      expect(el.cardWidth).to.equal('500px');
    });
  });
});
