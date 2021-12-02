// Base styling system (emotion)
import styled from '@emotion/styled';

export type {
  ThemeProviderProps as PrimitiveThemeProviderProps,
  SerializedStyles,
  GlobalProps as StylingGlobalsProps,
} from '@emotion/react';
export {
  css as cssTemplateString,
  keyframes,
  ThemeContext as PrimitiveThemeContext,
  ThemeProvider as PrimitiveThemeProvider,
  useTheme as primitiveUseTheme,
  withTheme as primitiveWithTheme,
  Global as StylingGlobals,
} from '@emotion/react';
export type {
  CreateStyled,
  CreateStyledComponent,
  StyledComponent,
  StyledOptions,
  StyledTags,
} from '@emotion/styled';
export type {
  CSSObject,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  EmotionLabel,
  SystemCssProperties,
  SystemStyleObject,
  UseThemeFunction,
  VariantProperty,
} from '@styled-system/css';
export { default as css } from '@styled-system/css';
export * as polished from 'polished';
export * from 'styled-system';

/**
 * styled, css and token utilities
 */
export * from './colorUtils';
export default styled;
