import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const miscellaneousProps: StylePropConfig<MiscellaneousProps> = {
  // SVGs
  stroke: {
    property: 'stroke',
    scale: STYLE_PROP_SCALES.colors,
  },
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: {
    property: 'strokeWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  filter: {
    property: 'filter',
    scale: STYLE_PROP_SCALES.filters,
  },
  // lists
  listStyle: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fillOpacity: true,
  fillRule: true,
  // img
  objectFit: true,
  objectPosition: true,
};

type MiscellaneousProps = {
  // SVGs
  stroke?: Token<CSS.Stroke, 'colors'>;
  strokeDasharray?: Token<CSS.StrokeDasharray>;
  strokeDashoffset?: Token<CSS.StrokeDashoffset>;
  strokeLinecap?: Token<CSS.StrokeLinecap>;
  strokeLinejoin?: Token<CSS.StrokeLinejoin>;
  strokeMiterlimit?: Token<CSS.StrokeMiterlimit>;
  strokeOpacity?: Token<CSS.StrokeOpacity>;
  strokeWidth?: Token<CSS.StrokeWidth, 'borderWidths'>;
  filter?: Token<CSS.Filter, 'filters'>;
  // lists
  listStyle?: Token<CSS.ListStyle>;
  listStyleType?: Token<CSS.ListStyleType>;
  listStylePosition?: Token<CSS.ListStylePosition>;
  listStyleImage?: Token<CSS.ListStyleImage>;
  fillOpacity?: Token<CSS.FillOpacity>;
  fillRule?: Token<CSS.FillRule>;
  // img
  objectFit?: Token<CSS.ObjectFit>;
  objectPosition?: Token<CSS.ObjectPosition>;
};

export type { MiscellaneousProps };
export { miscellaneousProps };
