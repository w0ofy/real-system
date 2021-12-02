import { fns } from '@real-system/utils';

import { ThemeShape } from './themes';
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
} from './tokens';

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

// categorized token typings
export type ColorTokens = keyof ReturnType<typeof colors>;
export type BackgroundColorTokens = keyof ReturnType<typeof backgroundColors>;
export type TextColorTokens = keyof ReturnType<typeof textColors>;
export type BorderColorTokens = keyof ReturnType<typeof borderColors>;
export type BorderTokens = keyof ReturnType<typeof borders>;
export type BorderWidthTokens = keyof typeof borderWidths;
export type ShadowTokens = keyof ReturnType<typeof shadows>;
export type FontTokens = keyof typeof fonts;
export type FontSizeTokens = keyof typeof fontSizes;
export type FontWeightTokens = keyof typeof fontWeights;
export type LetterSpacingTokens = keyof typeof letterSpacings;
export type LineHeightTokens = keyof typeof lineHeights;
export type RadiiTokens = keyof typeof radii;
export type SpaceTokens = keyof typeof space;
export type SizeTokens = keyof typeof sizes;
export type ZIndexTokens = keyof typeof zIndices;

// all token typings
export type ThemeTokens =
  | BorderWidthTokens
  | FontTokens
  | FontSizeTokens
  | FontWeightTokens
  | LetterSpacingTokens
  | LineHeightTokens
  | RadiiTokens
  | SpaceTokens
  | SizeTokens
  | ZIndexTokens
  | ColorTokens
  | BackgroundColorTokens
  | TextColorTokens
  | BorderColorTokens
  | BorderTokens
  | ShadowTokens
  | OrdinalTokens;

export type ThemeScales = keyof ThemeShape;

export type GetTokenReturnValue = string | number | undefined;
/**
 * A styleFn to get theme tokens
 */
const getToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback: GetTokenReturnValue = undefined
) => {
  return function <T = GetTokenReturnValue>(props): T {
    return fns.get(props.theme, `${scale}.${token}`, fallback);
  };
};

export { getToken };
