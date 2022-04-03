// Base styling system (emotion)
import styled from '@emotion/styled';

export { css } from './styled-system/cssFn';
export { default as isPropValid } from '@emotion/is-prop-valid';
export type {
  ThemeProviderProps as PrimitiveThemeProviderProps,
  GlobalProps as StylingGlobalsProps,
} from '@emotion/react';
export {
  css as emotionCSS,
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
