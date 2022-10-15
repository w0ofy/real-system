import * as React from 'react';
import {
  ThemeContext as RealSystemContext,
  ThemeProvider as EmotionProvider,
  ThemeProviderProps as EmotionProviderProps,
} from '@emotion/react';

import { ExtendableThemeShape, themes } from '../themes';

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
