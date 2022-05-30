import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const spaceProps: StylePropConfig<SpaceProps> = {
  margin: {
    property: 'margin',
    scale: STYLE_PROP_SCALES.space,
  },
  m: {
    property: 'margin',
    scale: STYLE_PROP_SCALES.space,
  },
  marginX: {
    properties: ['marginInlineStart', 'marginInlineEnd'],
    scale: STYLE_PROP_SCALES.space,
  },
  mx: {
    properties: ['marginInlineStart', 'marginInlineEnd'],
    scale: STYLE_PROP_SCALES.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: STYLE_PROP_SCALES.space,
  },
  mt: {
    property: 'marginTop',
    scale: STYLE_PROP_SCALES.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: STYLE_PROP_SCALES.space,
  },
  mr: {
    property: 'marginRight',
    scale: STYLE_PROP_SCALES.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  mb: {
    property: 'marginBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: STYLE_PROP_SCALES.space,
  },
  ml: {
    property: 'marginLeft',
    scale: STYLE_PROP_SCALES.space,
  },
  marginInline: {
    property: 'marginInline',
    scale: STYLE_PROP_SCALES.space,
  },
  mInline: {
    property: 'marginInline',
    scale: STYLE_PROP_SCALES.space,
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  marginStart: {
    property: 'marginInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  ms: {
    property: 'marginInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
  marginEnd: {
    property: 'marginInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
  me: {
    property: 'marginInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
  padding: {
    property: 'padding',
    scale: STYLE_PROP_SCALES.space,
  },
  p: {
    property: 'padding',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingX: {
    properties: ['paddingInlineStart', 'paddingInlineEnd'],
    scale: STYLE_PROP_SCALES.space,
  },
  px: {
    properties: ['paddingInlineStart', 'paddingInlineEnd'],
    scale: STYLE_PROP_SCALES.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: STYLE_PROP_SCALES.space,
  },
  pt: {
    property: 'paddingTop',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: STYLE_PROP_SCALES.space,
  },
  pr: {
    property: 'paddingRight',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  pb: {
    property: 'paddingBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: STYLE_PROP_SCALES.space,
  },
  pl: {
    property: 'paddingLeft',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingInline: {
    property: 'paddingInline',
    scale: STYLE_PROP_SCALES.space,
  },
  pInline: {
    property: 'paddingInline',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingStart: {
    property: 'paddingInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  ps: {
    property: 'paddingInlineStart',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingEnd: {
    property: 'paddingInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
  pe: {
    property: 'paddingInlineEnd',
    scale: STYLE_PROP_SCALES.space,
  },
};

type SpaceProps = {
  /**
   * The CSS `margin` property
   */
  margin?: Token<CSS.Margin, 'space'>;
  /**
   * The shorthand for CSS `margin` property
   */
  m?: Token<CSS.Margin, 'space'>;
  /**
   * The shorthand to apply CSS `margin-inline-start` and `margin-inline-end` properties
   */
  marginX?: Token<CSS.Margin, 'space'>;
  /**
   * The super shorthand to apply CSS `margin-inline-start` and `margin-inline-end` properties
   */
  mx?: Token<CSS.Margin, 'space'>;
  /**
   * The shorthand to apply CSS `margin-top` and `margin-bottom` properties
   */
  marginY?: Token<CSS.Margin, 'space'>;
  /**
   * The super shorthand to apply CSS `margin-top` and `margin-bottom` properties
   */
  my?: Token<CSS.Margin, 'space'>;
  /**
   * The CSS `margin-top` property
   */
  marginTop?: Token<CSS.MarginTop, 'space'>;
  /**
   * The shorthand for CSS `margin-top` property
   */
  mt?: Token<CSS.MarginTop, 'space'>;
  /**
   * The CSS `margin-right` property
   */
  marginRight?: Token<CSS.MarginRight, 'space'>;
  /**
   * The shorthand for CSS `margin-right` property
   */
  mr?: Token<CSS.MarginRight, 'space'>;
  /**
   * The CSS `margin-bottom` property
   */
  marginBottom?: Token<CSS.MarginBottom, 'space'>;
  /**
   * The shorthand for CSS `margin-right` property
   */
  mb?: Token<CSS.MarginBottom, 'space'>;
  /**
   * The CSS `margin-left` property
   */
  marginLeft?: Token<CSS.MarginLeft, 'space'>;
  /**
   * The shorthand for CSS `margin-left` property
   */
  ml?: Token<CSS.MarginLeft, 'space'>;
  /**
   * The CSS `margin-inline` property
   */
  marginInline?: Token<CSS.MarginInline, 'space'>;
  /**
   * The shorthand for CSS `margin-inline` property
   */
  mInline?: Token<CSS.MarginInline, 'space'>;
  /**
   * The CSS `margin-inline-start` property
   */
  marginInlineStart?: Token<CSS.MarginInlineStart, 'space'>;
  /**
   * The shorthand for CSS `margin-inline-start` property
   */
  marginStart?: Token<CSS.MarginInlineStart, 'space'>;
  /**
   * The super shorthand for CSS `margin-inline-start` property
   */
  ms?: Token<CSS.MarginInlineStart, 'space'>;
  /**
   * The CSS `margin-inline-end` property
   */
  marginInlineEnd?: Token<CSS.MarginInlineEnd, 'space'>;
  /**
   * The shorthand for CSS `margin-inline-end` property
   */
  marginEnd?: Token<CSS.MarginInlineEnd, 'space'>;
  /**
   * The super shorthand for CSS `margin-inline-end` property
   */
  me?: Token<CSS.MarginInlineEnd, 'space'>;
  /**
   * The CSS `padding` property
   */
  padding?: Token<CSS.Padding, 'space'>;
  /**
   * The shorthand for CSS `padding` property
   */
  p?: Token<CSS.Padding, 'space'>;
  /**
   * The shorthand to apply CSS `padding-left` and `padding-right` properties
   */
  paddingX?: Token<CSS.Padding, 'space'>;
  /**
   * The super shorthand to apply CSS `padding-left` and `padding-right` properties
   */
  px?: Token<CSS.Padding, 'space'>;
  /**
   * The shorthand to apply CSS `padding-top` and `padding-bottom` properties
   */
  paddingY?: Token<CSS.Padding, 'space'>;
  /**
   * The super shorthand to apply CSS `padding-top` and `padding-bottom` properties
   */
  py?: Token<CSS.Padding, 'space'>;
  /**
   * The CSS `padding-top` property
   */
  paddingTop?: Token<CSS.PaddingTop, 'space'>;
  /**
   * The shorthand for CSS `padding-top` property
   */
  pt?: Token<CSS.PaddingTop, 'space'>;
  /**
   * The CSS `padding-right` property
   */
  paddingRight?: Token<CSS.PaddingRight, 'space'>;
  /**
   * The shorthand for CSS `padding-right` property
   */
  pr?: Token<CSS.PaddingRight, 'space'>;
  /**
   * The CSS `padding-bottom` property
   */
  paddingBottom?: Token<CSS.PaddingBottom, 'space'>;
  /**
   * The shorthand for CSS `padding-bottom` property
   */
  pb?: Token<CSS.PaddingBottom, 'space'>;
  /**
   * The CSS `padding-left` property
   */
  paddingLeft?: Token<CSS.PaddingLeft, 'space'>;
  /**
   * The shorthand for CSS `padding-left` property
   */
  pl?: Token<CSS.PaddingLeft, 'space'>;
  /**
   * The CSS `padding-inline` property
   */
  paddingInline?: Token<CSS.PaddingInline, 'space'>;
  /**
   * The shorthand CSS `padding-inline` property
   */
  pInline?: Token<CSS.PaddingInline, 'space'>;
  /**
   * The CSS `padding-inline-start` property
   */
  paddingInlineStart?: Token<CSS.PaddingInlineStart, 'space'>;
  /**
   * The shorthand for CSS `padding-inline-start` property
   */
  paddingStart?: Token<CSS.PaddingInlineStart, 'space'>;
  /**
   * The super shorthand for CSS `padding-inline-start` property
   */
  ps?: Token<CSS.PaddingInlineStart, 'space'>;
  /**
   * The CSS `padding-inline-end` property
   */
  paddingInlineEnd?: Token<CSS.PaddingInlineEnd, 'space'>;
  /**
   * The shorthand for CSS `padding-inline-end` property
   */
  paddingEnd?: Token<CSS.PaddingInlineEnd, 'space'>;
  /**
   * The super shorthand for CSS `padding-inline-end` property
   */
  pe?: Token<CSS.PaddingInlineEnd, 'space'>;
};

export type { SpaceProps };
export { spaceProps };
