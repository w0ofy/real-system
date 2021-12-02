import React from 'react';

import {
  PrimitiveThemeContext as ThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
  primitiveUseTheme as useTheme,
  primitiveWithTheme as withTheme,
} from '@real-system/styling';

import { GlobalStyles } from './GlobalStyles';
import { themes } from './themes';
import { ThemeShape } from './themes';

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

/**
 * @todo create ThemeConsumer
 */
export { ThemeContext, ThemeProvider, useTheme, withTheme };
