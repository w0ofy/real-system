import {
  ThemeProvider as EmotionProvider,
  ThemeProviderProps as EmotionProviderProps,
} from '@emotion/react';
import { defaultTheme } from './defaultTheme';

export type ThemeProviderProps = Partial<EmotionProviderProps>;

const ThemeProvider = ({ children, ...otherProps }: ThemeProviderProps) => {
  return (
    // @ts-ignore
    <EmotionProvider theme={defaultTheme}>{children}</EmotionProvider>
  );
};

export { ThemeProvider };
