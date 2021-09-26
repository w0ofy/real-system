import {
  ThemeProvider as ThemeUIThemeProvider,
  ThemeProviderProps as ThemeUIProviderProps,
  Theme,
} from '@theme-ui/core';
import { deep } from '@theme-ui/presets';
import { defaultTheme } from './defaultTheme';
import { useThemeUI } from '@theme-ui/core';

export type ThemeProviderProps = Partial<ThemeUIProviderProps>;

const Test = ({ children }) => {
  const t = useThemeUI();
  console.log('theme', t);

  return children;
};

const ThemeProvider = ({ children, ...otherProps }: ThemeProviderProps) => {
  return (
    // @ts-ignore
    <ThemeUIThemeProvider theme={deep as Theme}>
      <Test>{children}</Test>
    </ThemeUIThemeProvider>
  );
};

export { ThemeProvider };
