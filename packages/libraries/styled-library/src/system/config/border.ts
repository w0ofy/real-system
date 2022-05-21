import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const borderProps: StylePropConfig<BorderProps> = {
  border: {
    property: 'border',
    scale: STYLE_PROP_SCALES.borders,
  },
  borderWidth: {
    property: 'borderWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  borderStyle: true,
  borderColor: {
    property: 'borderColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  borderRadius: {
    property: 'borderRadius',
    scale: STYLE_PROP_SCALES.radii,
  },
  borderTop: {
    property: 'borderTop',
    scale: STYLE_PROP_SCALES.borders,
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: STYLE_PROP_SCALES.radii,
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: STYLE_PROP_SCALES.radii,
  },
  borderRight: {
    property: 'borderRight',
    scale: STYLE_PROP_SCALES.borders,
  },
  borderBottom: {
    property: 'borderBottom',
    scale: STYLE_PROP_SCALES.borders,
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: STYLE_PROP_SCALES.radii,
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: STYLE_PROP_SCALES.radii,
  },
  borderLeft: {
    property: 'borderLeft',
    scale: STYLE_PROP_SCALES.borders,
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  borderTopStyle: true,
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  borderBottomStyle: true,
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  borderLeftStyle: true,
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  borderRightStyle: true,
  borderSpacing: {
    property: 'borderSpacing',
    scale: STYLE_PROP_SCALES.space,
  },
};

type BorderProps = {
  border?: Token<CSS.Border, 'borders'>;
  borderTop?: Token<CSS.BorderTop, 'borders'>;
  borderRight?: Token<CSS.BorderRight, 'borders'>;
  borderBottom?: Token<CSS.BorderBottom, 'borders'>;
  borderLeft?: Token<CSS.BorderLeft, 'borders'>;

  borderColor?: Token<CSS.BorderColor, 'colors'>;
  borderTopColor?: Token<CSS.BorderTopColor, 'colors'>;
  borderRightColor?: Token<CSS.BorderRightColor, 'colors'>;
  borderBottomColor?: Token<CSS.BorderBottomColor, 'colors'>;
  borderLeftColor?: Token<CSS.BorderLeftColor, 'colors'>;

  borderRadius?: Token<CSS.BorderRadius, 'radii'>;
  borderTopLeftRadius?: Token<CSS.BorderTopLeftRadius, 'radii'>;
  borderTopRightRadius?: Token<CSS.BorderTopRightRadius, 'radii'>;
  borderBottomLeftRadius?: Token<CSS.BorderBottomLeftRadius, 'radii'>;
  borderBottomRightRadius?: Token<CSS.BorderBottomRightRadius, 'radii'>;

  borderWidth?: Token<CSS.BorderWidth, 'borderWidths'>;
  borderTopWidth?: Token<CSS.BorderTopWidth, 'borderWidths'>;
  borderRightWidth?: Token<CSS.BorderRightWidth, 'borderWidths'>;
  borderLeftWidth?: Token<CSS.BorderLeftWidth, 'borderWidths'>;
  borderBottomWidth?: Token<CSS.BorderBottomWidth, 'borderWidths'>;

  borderStyle?: Token<CSS.BorderStyle>;
  borderRightStyle?: Token<CSS.BorderRightStyle>;
  borderBottomStyle?: Token<CSS.BorderBottomStyle>;
  borderLeftStyle?: Token<CSS.BorderLeftStyle>;
  borderTopStyle?: Token<CSS.BorderTopStyle>;

  borderSpacing?: Token<CSS.BorderSpacing>;
};

export type { BorderProps };
export { borderProps };
