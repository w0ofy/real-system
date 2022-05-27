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
   * The CSS `borderTop` property
   */
  borderTop?: Token<CSS.BorderTop, 'borders'>;
  /**
   * The CSS `borderRight` property
   */
  borderRight?: Token<CSS.BorderRight, 'borders'>;
  /**
   * The CSS `borderBottom` property
   */
  borderBottom?: Token<CSS.BorderBottom, 'borders'>;
  /**
   * The CSS `borderLeft` property
   */
  borderLeft?: Token<CSS.BorderLeft, 'borders'>;

  /**
   * The CSS `borderColor` property
   */
  borderColor?: Token<CSS.BorderColor, 'colors'>;
  /**
   * The CSS `borderTopColor` property
   */
  borderTopColor?: Token<CSS.BorderTopColor, 'colors'>;
  /**
   * The CSS `borderRightColor` property
   */
  borderRightColor?: Token<CSS.BorderRightColor, 'colors'>;
  /**
   * The CSS `borderBottomColor` property
   */
  borderBottomColor?: Token<CSS.BorderBottomColor, 'colors'>;
  /**
   * The CSS `borderLeftColor` property
   */
  borderLeftColor?: Token<CSS.BorderLeftColor, 'colors'>;

  /**
   * The CSS `borderRadius` property
   */
  borderRadius?: Token<CSS.BorderRadius, 'radii'>;
  /**
   * The CSS `borderTopLeftRadius` property
   */
  borderTopLeftRadius?: Token<CSS.BorderTopLeftRadius, 'radii'>;
  /**
   * The CSS `borederTopRightRadius` property
   */
  borderTopRightRadius?: Token<CSS.BorderTopRightRadius, 'radii'>;
  /**
   * The CSS `borderBottomLeftRadius` property
   */
  borderBottomLeftRadius?: Token<CSS.BorderBottomLeftRadius, 'radii'>;
  /**
   * The CSS `borderBottomRightRadius` property
   */
  borderBottomRightRadius?: Token<CSS.BorderBottomRightRadius, 'radii'>;

  /**
   * The CSS `borderWidth` property
   */
  borderWidth?: Token<CSS.BorderWidth, 'borderWidths'>;
  /**
   * The CSS `borderTopWidth` property
   */
  borderTopWidth?: Token<CSS.BorderTopWidth, 'borderWidths'>;
  /**
   * The CSS `borderRightWidth` property
   */
  borderRightWidth?: Token<CSS.BorderRightWidth, 'borderWidths'>;
  /**
   * The CSS `borderLeftWidth` property
   */
  borderLeftWidth?: Token<CSS.BorderLeftWidth, 'borderWidths'>;
  /**
   * The CSS `borderBottomWidth` property
   */
  borderBottomWidth?: Token<CSS.BorderBottomWidth, 'borderWidths'>;

  /**
   * The CSS `borderStyle` property
   */
  borderStyle?: Token<CSS.BorderStyle>;
  /**
   * The CSS `borderRightStyle` property
   */
  borderRightStyle?: Token<CSS.BorderRightStyle>;
  /**
   * The CSS `borderBottomStyle` property
   */
  borderBottomStyle?: Token<CSS.BorderBottomStyle>;
  /**
   * The CSS `borderLeftStyle` property
   */
  borderLeftStyle?: Token<CSS.BorderLeftStyle>;
  /**
   * The CSS `borderTopStyle` property
   */
  borderTopStyle?: Token<CSS.BorderTopStyle>;

  /**
   * The CSS `borderSpacing` property
   */
  borderSpacing?: Token<CSS.BorderSpacing>;
};

export type { BorderProps };
export { borderProps };
