import styled from 'styled-components';

/**
 * libs
 * styled-system (with css prop util) and styled-components
 */
export * from './styled-components';
export type {
  AnyStyledComponent,
  BaseThemeProviderComponent,
  BaseWithThemeFnInterface,
  CSSKeyframes,
  CSSObject,
  CSSProp,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
  GlobalStyleComponent,
  isStyledComponent,
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
  ThemeProviderProps,
  WithThemeFnInterface,
} from 'styled-components';
export {
  createGlobalStyle,
  css,
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
