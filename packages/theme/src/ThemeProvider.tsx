import React from 'react';

import {
  DefaultTheme,
  PrimitiveThemeConsumer as ThemeConsumer,
  PrimitiveThemeContext as ThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
  primitiveUseTheme as useTheme,
  primitiveWithTheme as withTheme,
} from '@realsystem/styling';

import { GlobalStyles } from './GlobalStyles';
import { THEMES } from './themes';

export type ThemeProviderProps = {
  theme?: DefaultTheme;
} & Pick<PrimitiveThemeProviderProps<ThemeProviderProps>, 'children'>;

const ThemeProvider = ({
  children,
  ...restProps
}: ThemeProviderProps): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={THEMES.DEFAULT} {...restProps}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

export { ThemeConsumer, ThemeContext, ThemeProvider, useTheme, withTheme };
