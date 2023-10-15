import * as React from 'react';
import type { ThemeProviderProps as EmotionProviderProps } from '@emotion/react';
import {
  ThemeContext as RealSystemContext,
  ThemeProvider as EmotionProvider,
} from '@emotion/react';

import type { ExtendableThemeShape } from '../themes';
import { themes } from '../themes';

import { GlobalStyles } from './GlobalStyles';

type RealSystemProviderProps = {
  theme?: ExtendableThemeShape;
  preventGlobals?: boolean;
} & Pick<EmotionProviderProps, 'children'>;

const RealSystemProvider = ({
  children,
  theme = themes.realSystem,
  preventGlobals,
}: RealSystemProviderProps) => {
  return (
    <EmotionProvider theme={theme}>
      <>
        {!preventGlobals && <GlobalStyles />}
        {children}
      </>
    </EmotionProvider>
  );
};

export type { RealSystemProviderProps };
export { RealSystemContext, RealSystemProvider };
