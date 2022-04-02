import { merge } from '@real-system/utils-library';

import { Palette, palettes } from '../palettes';
import {
  borders,
  borderWidths,
  colors,
  filters,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
} from '../tokens';

import { makeTokenScale } from './utils';

/**
 * @description generates a tokenized theme with a given Palette. Uses the `realSystem` palette if a palette isn't provided
 */
const makeTheme = (palette: Palette = palettes.realSystem) => {
  const colorTokens = colors(palette);
  return {
    // scales that require color tokens
    colors: colorTokens,
    filters: makeTokenScale(filters(colorTokens)),
    borders: makeTokenScale(borders(colorTokens)),
    shadows: makeTokenScale(shadows(colorTokens)),
    // scales that DON'T require color tokens
    fonts: makeTokenScale(fonts),
    fontSizes: makeTokenScale(fontSizes),
    fontWeights: makeTokenScale(fontWeights),
    letterSpacings: makeTokenScale(letterSpacings),
    lineHeights: makeTokenScale(lineHeights),
    borderWidths: makeTokenScale(borderWidths),
    radii: makeTokenScale(radii),
    sizes: makeTokenScale(sizes),
    zIndices: makeTokenScale(zIndices),
    space: makeTokenScale(space),
  };
};

type ThemeShape = ReturnType<typeof makeTheme>;
type ExtendableThemeShape =
  | Partial<ThemeShape>
  | Partial<Record<keyof ThemeShape, unknown>>;

export type { ExtendableThemeShape, ThemeShape };
export { makeTheme };
