import React from 'react';

import {
  PrimitiveThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
} from '@real-system/styling-library';

import { themes, ThemeShape } from '../themes';

import { GlobalStyles } from './GlobalStyles';

export type ThemeProviderProps = {
  theme?: ThemeShape;
} & Pick<PrimitiveThemeProviderProps, 'children'>;

const ThemeProvider = ({
  children,
  theme,
  ...restProps
}: ThemeProviderProps): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={theme || themes.realsystem} {...restProps}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

const ThemeContext = PrimitiveThemeContext;

export { ThemeContext, ThemeProvider };
