import get from 'lodash.get';

import { DefaultTheme } from '@realsystem/styling';

import {
  backgroundColors,
  borderColors,
  borders,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  textColors,
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
  | keyof ReturnType<typeof borderColors>
  | keyof typeof borders
  | keyof typeof borderWidths
  | keyof typeof colors
  | keyof typeof fonts
  | keyof typeof fontSizes
  | keyof typeof fontWeights
  | keyof typeof letterSpacings
  | keyof typeof lineHeights
  | keyof typeof radii
  | keyof ReturnType<typeof shadows>
  | keyof typeof space
  | keyof typeof sizes
  | keyof typeof zIndices
  | keyof ReturnType<typeof colors>
  | keyof ReturnType<typeof backgroundColors>
  | keyof ReturnType<typeof textColors>
  | keyof ReturnType<typeof borderColors>
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
  return function (props: Props): string | number | null {
    return get(props.theme, `${scale}.${token}`, fallback);
  };
};

export { getToken, ThemeScales, ThemeTokens };
