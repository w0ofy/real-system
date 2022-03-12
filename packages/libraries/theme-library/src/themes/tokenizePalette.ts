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
} from '../tokens/factory';

import { makeTokenScale } from './utils';

/**
 * @description generates a tokenized theme with the given Palette. Uses the realsystem palette by default
 */
const tokenizePalette = (palette: Palette = palettes.default) => {
  const colorTokens = colors(palette);
  return {
    palette,
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

type ThemeShape = ReturnType<typeof tokenizePalette>;

export type { ThemeShape };
export { tokenizePalette };
