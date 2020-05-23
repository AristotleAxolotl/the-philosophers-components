// /* eslint-disable import/extensions */
// /* eslint-disable no-unused-expressions */
// import { expect, fixture } from '@open-wc/testing';
// import { ThePhilosophersComponents } from '../../../../src/components/tpc';

// import { waitFor } from '../../common/timings';

// describe('<the-philosophers-components>', () => {
//   describe('default behaviour', () => {
//     let el;
//     beforeEach(async () => {
//       ThePhilosophersComponents.register();
//       el = await fixture('<the-philosophers-components></the-philosophers-components>');
//       // await waitFor(el._loaded);
//       // console.log('LOADED? :', el._loaded);
//       // return el;
//     });
//     it('should output the correct structure', async () => {
//       console.log('LOADED? :', el._loaded);
//       expect(el).shadowDom.to.equal(`
//         <nav-bar></nav-bar>
//         <philosophers-card cardlink="http://localhost:8000/demo/cardLinkExample" cardType="small">
//           <span slot="cardText">
//             This should be an axolotl?
//           </span>
//         </philosophers-card>
//         <blog-post>
//           <span slot="mainBodyText">
//             text yo
//           </span>
//         </blog-post>
//         <create-blog-post></create-blog-post>
//         <div imagecontainer="">
//           <philosophers-image style='background-image: url("../../../assets/images/axolotl.jpg");'>
//           </philosophers-image>
//         </div>
//         <infinite-scroller demoScroller></infinite-scroller>
//       `);
//     });
//   });
// });
