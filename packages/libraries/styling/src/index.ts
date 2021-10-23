import styled from 'styled-components';

/**
 * libs
 * styled-system (with css prop util) and styled-components
 */
export * from './styled-components';
export type {
  BaseThemeProviderComponent,
  BaseWithThemeFnInterface,
  CSSKeyframes,
  CSSObject,
  CSSProp,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProviderProps as PrimitiveThemeProviderProps,
  StyledComponent,
  StyledComponentBase,
  StyledComponentInnerAttrs,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
  StyledComponentProps,
  StyledComponentPropsWithRef,
  StyledConfig,
  StyledFunction,
  StyledInterface,
  StyledProps,
  ThemedBaseStyledInterface,
  ThemedCssFunction,
  ThemedGlobalStyledClassProps,
  ThemedStyledComponentsModule,
  ThemedStyledFunction,
  ThemedStyledFunctionBase,
  ThemedStyledInterface,
  ThemedStyledProps,
  ThemeProps,
  ThemeProviderComponent,
  WithThemeFnInterface,
} from 'styled-components';
export {
  createGlobalStyle,
  css,
  isStyledComponent,
  ThemeConsumer as PrimitiveThemeConsumer,
  ThemeContext as PrimitiveThemeContext,
  ThemeProvider as PrimitiveThemeProvider,
  useTheme as primitiveUseTheme,
  withTheme as primitiveWithTheme,
} from 'styled-components';
export * from 'styled-system';
/**
 * styled, css and token utilities
 */
export * from './styleProps';
export { default as cssProp } from '@styled-system/css';
export default styled;
