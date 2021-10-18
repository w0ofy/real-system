import {
  DefaultTheme,
  PrimitiveThemeConsumer as ThemeConsumer,
  PrimitiveThemeContext as ThemeContext,
  PrimitiveThemeProvider,
  primitiveUseTheme as useTheme,
  primitiveWithTheme as withTheme,
} from '@realsystem/styling';

import { THEMES } from '../themes';
import { GlobalStyles } from '..';

export type ThemeProviderProps = {
  children: React.ReactChild;
  theme?: DefaultTheme;
};

const ThemeProvider = ({
  children,
  ...otherProps
}: Partial<ThemeProviderProps>): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={THEMES.DEFAULT} {...otherProps}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

export { ThemeConsumer, ThemeContext, ThemeProvider, useTheme, withTheme };
