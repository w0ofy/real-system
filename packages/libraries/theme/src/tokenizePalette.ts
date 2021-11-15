import { DefaultTheme } from 'styled-components';

import { makeTokenScale } from './utils/makeTokenScale';
import { Palette, palettes } from './palettes';
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

/**
 *
 * @description generates a tokenized theme with the given Palette. Uses the realsystem palette by default
 */
const tokenizePalette = (
  palette: Palette = palettes.default
): DefaultTheme => ({
  palette: palette,
  // scales that inherit the palette
  colors: {
    ...colors(palette),
    ...backgroundColors(palette),
    ...textColors(palette),
    ...borderColors(palette),
  },
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

export { tokenizePalette };
