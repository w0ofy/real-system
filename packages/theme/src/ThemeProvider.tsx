import React from 'react';

import {
  DefaultTheme,
  PrimitiveThemeConsumer as ThemeConsumer,
  PrimitiveThemeContext as ThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
  primitiveUseTheme as useTheme,
  primitiveWithTheme as withTheme,
} from '@real-system/styling';

import { GlobalStyles } from './GlobalStyles';
import { themes } from './themes';

export type ThemeProviderProps = {
  theme?: DefaultTheme;
} & Pick<PrimitiveThemeProviderProps<ThemeProviderProps>, 'children'>;

const ThemeProvider = ({
  children,
  ...restProps
}: ThemeProviderProps): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={themes.realsystem()} {...restProps}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

export { ThemeConsumer, ThemeContext, ThemeProvider, useTheme, withTheme };
