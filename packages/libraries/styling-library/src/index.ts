import { styled } from './styled-system/index';

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
 * styled, css and token utilities
 */
export default styled;

/**
 * real system style props
 */
export * from './styled-system';
