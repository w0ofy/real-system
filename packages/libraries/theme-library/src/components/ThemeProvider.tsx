import React from 'react';

import {
  PrimitiveThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
} from '@real-system/styling-library';

import { ExtendableThemeShape, themes } from '../themes';

import { GlobalStyles } from './GlobalStyles';

export type ThemeProviderProps = {
  theme?: ExtendableThemeShape;
} & Pick<PrimitiveThemeProviderProps, 'children'>;

const ThemeProvider = ({
  children,
  theme = themes.realSystem,
}: ThemeProviderProps): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

const ThemeContext = PrimitiveThemeContext;

export { ThemeContext, ThemeProvider };
