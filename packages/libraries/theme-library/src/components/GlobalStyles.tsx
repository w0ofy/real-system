import * as React from 'react';

import { css, StylingGlobals } from '@real-system/styling-library';

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
    <StylingGlobals styles={normalizeStyles} />
    <StylingGlobals styles={realSystemStyles} />
  </>
);

export { GlobalStyles };
