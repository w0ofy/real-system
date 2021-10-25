import { DefaultTheme } from 'styled-components';

import { makeTokenScale } from '../makeTokenScale';

import backgroundColors from './backgroundColors';
import borderColors from './borderColors';
import borders from './borders';
import borderWidths from './borderWidths';
import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import textColors from './textColors';
import zIndices from './zIndices';

const realsystem: DefaultTheme = {
  colors: {
    ...colors,
    ...backgroundColors,
    ...borderColors,
    ...textColors,
  },
  fonts: makeTokenScale(fonts),
  fontSizes: makeTokenScale(fontSizes),
  fontWeights: makeTokenScale(fontWeights),
  letterSpacings: makeTokenScale(letterSpacings),
  lineHeights: makeTokenScale(lineHeights),
  borders: makeTokenScale(borders),
  borderWidths: makeTokenScale(borderWidths),
  radii: makeTokenScale(radii),
  shadows: makeTokenScale(shadows),
  sizes: makeTokenScale(sizes),
  zIndices: makeTokenScale(zIndices),
  space: makeTokenScale(space),
};

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
  radii,
  shadows,
  sizes,
  space,
  textColors,
  zIndices,
};

export default realsystem;
