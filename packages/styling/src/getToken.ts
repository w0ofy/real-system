import get from 'lodash/get';
import { DefaultTheme } from 'styled-components';
import {
  backgroundColors,
  borderColors,
  borders,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  textColors,
  sizes,
  zIndices,
} from './tokens/default';

type OrdinalTokens =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19;

type ThemeTokens =
  | keyof typeof backgroundColors
  | keyof typeof borderColors
  | keyof typeof borders
  | keyof typeof borderWidths
  | keyof typeof colors
  | keyof typeof fonts
  | keyof typeof fontSizes
  | keyof typeof fontWeights
  | keyof typeof lineHeights
  | keyof typeof radii
  | keyof typeof shadows
  | keyof typeof space
  | keyof typeof sizes
  | keyof typeof textColors
  | keyof typeof zIndices
  | keyof typeof colors
  | keyof typeof backgroundColors
  | keyof typeof textColors
  | keyof typeof borderColors
  | OrdinalTokens;

type Fallback = string | number | null;
type ThemeScales = keyof DefaultTheme;
type Props = { theme: DefaultTheme };

/**
 * A styleFn to get theme tokens
 */
const getToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback: Fallback = null
) => {
  return function (props: Props) {
    return get(props.theme, `${scale}.${token}`, fallback);
  };
};

export { ThemeTokens, getToken, ThemeScales };
