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

export type OrdinalTokens =
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

export type ColorTokens =
  | keyof ReturnType<typeof colors>
  | keyof ReturnType<typeof backgroundColors>
  | keyof ReturnType<typeof textColors>
  | keyof ReturnType<typeof borderColors>;

export type ThemeTokens =
  | keyof typeof borderWidths
  | keyof typeof fonts
  | keyof typeof fontSizes
  | keyof typeof fontWeights
  | keyof typeof letterSpacings
  | keyof typeof lineHeights
  | keyof typeof radii
  | keyof typeof space
  | keyof typeof sizes
  | keyof typeof zIndices
  | ColorTokens
  | keyof ReturnType<typeof borders>
  | keyof ReturnType<typeof shadows>
  | OrdinalTokens;

export type ThemeScales = keyof DefaultTheme;

type Props = { theme: DefaultTheme };
type Fallback = string | number | null;
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

export { getToken };
