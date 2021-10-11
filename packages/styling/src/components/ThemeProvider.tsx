import {
  DefaultTheme,
  ThemeConsumer,
  ThemeProvider as SCThemeProvider,
  useTheme,
} from 'styled-components';

import { THEMES } from '../themes';

export type ThemeProviderProps = {
  children: React.ReactChild;
  theme?: DefaultTheme;
};

const ThemeProvider = ({
  children,
  ...otherProps
}: Partial<ThemeProviderProps>) => {
  return (
    <SCThemeProvider theme={THEMES.default} {...otherProps}>
      <>{children}</>
    </SCThemeProvider>
  );
};

export { ThemeConsumer, ThemeProvider, useTheme };
