import * as React from 'react';
import { Global } from '@emotion/react';

import { css } from '../../system/cssFn';
import { normalizeStyles } from '../normalize';

const realSystemStyles = css({
  html: {
    fontSize: 'rem-base',
    outlineColor: 'blue-400',
  },
  body: {
    WebkitFontSmoothing: 'subpixel-antialiased',
    MozOsxFontSmoothing: 'auto',
    fontFamily: 'body',
    fontWeight: 2,
    letterSpacing: 'body',
    backgroundColor: 'white',
  },
});

const GlobalStyles = () => (
  <>
    <Global styles={normalizeStyles} />
    <Global styles={realSystemStyles} />
  </>
);

export { GlobalStyles };
