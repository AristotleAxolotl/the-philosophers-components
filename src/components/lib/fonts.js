import { css } from 'lit-element';

export const fonts = {
  Chic: css`
    @font-face {
      font-family: 'Chic';
      src: url('/assets/fonts/Didact_Gothic_Chic/DidactGothic-Regular.woff2') format('woff2');
      font-display: swap;
    }
  `,
  Progressive: css`
    @font-face {
      font-family: 'Progressive';
      src: url('/assets/fonts/Open_Sans_Condensed_Progressive/OpenSansCondensed-Light.woff2')
        format('woff2');
      font-display: swap;
    }
  `,
  Strong: css`
    @font-face {
      font-family: 'Strong';
      src: url('/assets/fonts/Futura_Strong/futur.woff2') format('woff2');
      font-display: swap;
    }
  `,
  Clean: css`
    @font-face {
      font-family: 'Clean';
      src: url('/assets/fonts/Lato_Clean/Lato-Regular.woff2') format('woff2');
      font-display: swap;
    }
  `,
};
