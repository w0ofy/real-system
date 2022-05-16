export type {
  ThemeProviderProps as PrimitiveThemeProviderProps,
  GlobalProps as StylingGlobalsProps,
} from '@emotion/react';
export {
  keyframes,
  ThemeContext as PrimitiveThemeContext,
  ThemeProvider as PrimitiveThemeProvider,
  useTheme as primitiveUseTheme,
  withTheme as primitiveWithTheme,
  Global as StylingGlobals,
} from '@emotion/react';
export * as polished from 'polished';

/**
 * real system styled-system - includes `styled` named export
 */
export * from './styled-system';
export { styled as default } from './styled-system';
