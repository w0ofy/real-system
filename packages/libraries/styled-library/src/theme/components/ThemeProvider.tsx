import * as React from 'react';
import {
  ThemeContext as EmotionThemeContext,
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
}: ThemeProviderProps): React.ReactElement => {
  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </EmotionThemeProvider>
  );
};

const ThemeContext = EmotionThemeContext;

export type { ThemeProviderProps };
export { ThemeContext, ThemeProvider };
