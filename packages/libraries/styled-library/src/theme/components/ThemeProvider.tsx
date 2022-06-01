import * as React from 'react';
import {
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';

import { ExtendableThemeShape, themes } from '../themes';

import { GlobalStyles } from './GlobalStyles';

type ThemeProviderProps = {
  theme?: ExtendableThemeShape;
} & Pick<EmotionThemeProviderProps, 'children'>;

const ThemeProvider = ({
  children,
  theme = themes.realSystem,
}: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </EmotionThemeProvider>
  );
};

export type { ThemeProviderProps };
export { ThemeContext, ThemeProvider };
