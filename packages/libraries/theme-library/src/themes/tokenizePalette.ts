import { Palette, palettes } from '../palettes';
import {
  backgroundColors,
  borderColors,
  borders,
  borderWidths,
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
  textColors,
  zIndices,
} from '../tokens/factory';

import { makeTokenScale } from './utils';

/**
 *
 * @description generates a tokenized theme with the given Palette. Uses the realsystem palette by default
 */
const tokenizePalette = (palette: Palette = palettes.default) => ({
  palette: palette,
  // scales that require palette
  colors: {
    ...backgroundColors(palette),
    ...borderColors(palette),
    ...textColors(palette),
  },
  filters: filters(palette),
  borders: makeTokenScale(borders(palette)),
  shadows: makeTokenScale(shadows(palette)),
  // scales that DON'T require palette
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
});

type ThemeShape = ReturnType<typeof tokenizePalette>;

export type { ThemeShape };
export { tokenizePalette };
