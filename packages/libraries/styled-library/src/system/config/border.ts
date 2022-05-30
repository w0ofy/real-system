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
  /**
   * The CSS `border` property
   */
  border?: Token<CSS.Border, 'borders'>;
  /**
   * The CSS `border-top` property
   */
  borderTop?: Token<CSS.BorderTop, 'borders'>;
  /**
   * The CSS `border-right` property
   */
  borderRight?: Token<CSS.BorderRight, 'borders'>;
  /**
   * The CSS `borderBottom` property
   */
  borderBottom?: Token<CSS.BorderBottom, 'borders'>;
  /**
   * The CSS `border-left` property
   */
  borderLeft?: Token<CSS.BorderLeft, 'borders'>;
  /**
   * The CSS `border-color` property
   */
  borderColor?: Token<CSS.BorderColor, 'colors'>;
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: Token<CSS.BorderTopColor, 'colors'>;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: Token<CSS.BorderRightColor, 'colors'>;
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: Token<CSS.BorderBottomColor, 'colors'>;
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: Token<CSS.BorderLeftColor, 'colors'>;
  /**
   * The CSS `border-radius` property
   */
  borderRadius?: Token<CSS.BorderRadius, 'radii'>;
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: Token<CSS.BorderTopLeftRadius, 'radii'>;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: Token<CSS.BorderTopRightRadius, 'radii'>;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: Token<CSS.BorderBottomLeftRadius, 'radii'>;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: Token<CSS.BorderBottomRightRadius, 'radii'>;
  /**
   * The CSS `border-width` property
   */
  borderWidth?: Token<CSS.BorderWidth, 'borderWidths'>;
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: Token<CSS.BorderTopWidth, 'borderWidths'>;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: Token<CSS.BorderRightWidth, 'borderWidths'>;
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: Token<CSS.BorderLeftWidth, 'borderWidths'>;
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: Token<CSS.BorderBottomWidth, 'borderWidths'>;
  /**
   * The CSS `border-style` property
   */
  borderStyle?: Token<CSS.BorderStyle>;
  /**
   * The CSS `border-right-style` property
   */
  borderRightStyle?: Token<CSS.BorderRightStyle>;
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: Token<CSS.BorderBottomStyle>;
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: Token<CSS.BorderLeftStyle>;
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: Token<CSS.BorderTopStyle>;
  /**
   * The CSS `border-spacing` property
   */
  borderSpacing?: Token<CSS.BorderSpacing>;
};

export type { BorderProps };
export { borderProps };
