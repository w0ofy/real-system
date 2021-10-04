import { ThemeShape } from '@styling/@types/theme';
import { makeTokenScale } from '@styling/utils';

import backgroundColors from './backgroundColors';
import borderColors from './borderColors';
import borders from './borders';
import borderWidths from './borderWidths';
import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import lineHeights from './lineHeights';
import radii from './radii';
import shadows from './shadows';
import size from './size';
import space from './space';
import textColors from './textColors';
import zIndices from './zIndices';

const realsystem: ThemeShape = {
  colors: {
    ...colors,
    ...backgroundColors,
    ...borderColors,
    ...textColors,
  },
  fonts,
  fontSizes: makeTokenScale(fontSizes),
  fontWeights: makeTokenScale(fontWeights),
  lineHeights: makeTokenScale(lineHeights),
  borders: makeTokenScale(borders),
  borderWidths: makeTokenScale(borderWidths),
  radii: makeTokenScale(radii),
  shadows: makeTokenScale(shadows),
  size: makeTokenScale(size),
  zIndices: makeTokenScale(zIndices),
  space: makeTokenScale(space),
};

export {
  backgroundColors,
  borderColors,
  borders,
  borderWidths,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  textColors,
  zIndices,
};

export default realsystem;
