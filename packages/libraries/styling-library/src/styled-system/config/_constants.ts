import type { ScaleValueTypings } from './_types';

const STYLE_PROP_SCALES: {
  [key in keyof ScaleValueTypings]: keyof ScaleValueTypings;
} = {
  borders: 'borders',
  borderWidths: 'borderWidths',
  colors: 'colors',
  filters: 'filters',
  fonts: 'fonts',
  fontSizes: 'fontSizes',
  fontWeights: 'fontWeights',
  letterSpacings: 'letterSpacings',
  lineHeights: 'lineHeights',
  radii: 'radii',
  shadows: 'shadows',
  sizes: 'sizes',
  space: 'space',
  zIndices: 'zIndices',
};

type StylePropScales = keyof typeof STYLE_PROP_SCALES;

export { STYLE_PROP_SCALES, StylePropScales };
