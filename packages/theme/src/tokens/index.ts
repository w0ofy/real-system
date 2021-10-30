import { DefaultTheme } from 'styled-components';

import { AnyPalette, defaultPalette } from '../palettes';

import { makeTokenScale } from './makeTokenScale';
import {
  backgroundColors,
  borderColors,
  borders,
  colors,
  shadows,
  textColors,
} from './paletteScales';
import {
  borderWidths,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  zIndices,
} from './staticScales';

const palette = defaultPalette;

const realsystem = (palette: AnyPalette = defaultPalette): DefaultTheme => ({
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

export {
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
  palette,
  radii,
  shadows,
  sizes,
  space,
  textColors,
  zIndices,
};

export default realsystem;
