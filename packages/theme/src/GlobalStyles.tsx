import { createGlobalStyle } from '@realsystem/styling';

import { getToken } from './getToken';
import { normalize } from './normalize';

const GlobalStyles = createGlobalStyle`
 ${normalize}
 
  html {
    font-size: 0.625rem;
    outline-color: ${getToken('color-border-brand-strong')};
  }

  body {
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    font-family: ${getToken('font-family-text', 'fonts')};
    font-weight: ${getToken(0, 'fontWeights')};
    letter-spacing: 0.2px;
    background-color: ${getToken('color-background')};
  }
`;

export { GlobalStyles };
