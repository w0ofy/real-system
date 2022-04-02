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
  marginInline: true,
  mInline: {
    property: 'marginInline',
  },
  marginInlineStart: true,
  ms: {
    property: 'marginInlineStart',
  },
  marginInlineEnd: true,
  me: {
    property: 'marginInlineEnd',
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
  paddingInline: true,
  pInline: {
    property: 'paddingInlineStart',
  },
  paddingInlineStart: true,
  ps: {
    property: 'paddingInlineStart',
  },
  paddingInlineEnd: true,
  pe: {
    property: 'paddingInlineEnd',
  },
};

type SpaceProps = {
  margin?: Token<CSS.Margin, 'space'>;
  m?: Token<CSS.Margin, 'space'>;
  marginX?: Token<CSS.Margin, 'space'>;
  mx?: Token<CSS.Margin, 'space'>;
  marginY?: Token<CSS.Margin, 'space'>;
  my?: Token<CSS.Margin, 'space'>;
  marginTop?: Token<CSS.MarginTop, 'space'>;
  mt?: Token<CSS.MarginTop, 'space'>;
  marginRight?: Token<CSS.MarginRight, 'space'>;
  mr?: Token<CSS.MarginRight, 'space'>;
  marginBottom?: Token<CSS.MarginBottom, 'space'>;
  mb?: Token<CSS.MarginBottom, 'space'>;
  marginLeft?: Token<CSS.MarginLeft, 'space'>;
  ml?: Token<CSS.MarginLeft, 'space'>;
  marginInline?: Token<CSS.MarginInline, 'space'>;
  mInline?: Token<CSS.MarginInline, 'space'>;
  marginInlineStart?: Token<CSS.MarginInlineStart, 'space'>;
  ms?: Token<CSS.MarginInlineStart, 'space'>;
  marginInlineEnd?: Token<CSS.MarginInlineEnd, 'space'>;
  me?: Token<CSS.MarginInlineEnd, 'space'>;
  padding?: Token<CSS.Padding, 'space'>;
  p?: Token<CSS.Padding, 'space'>;
  paddingX?: Token<CSS.Padding, 'space'>;
  px?: Token<CSS.Padding, 'space'>;
  paddingY?: Token<CSS.Padding, 'space'>;
  py?: Token<CSS.Padding, 'space'>;
  paddingTop?: Token<CSS.PaddingTop, 'space'>;
  pt?: Token<CSS.PaddingTop, 'space'>;
  paddingRight?: Token<CSS.PaddingRight, 'space'>;
  pr?: Token<CSS.PaddingRight, 'space'>;
  paddingBottom?: Token<CSS.PaddingBottom, 'space'>;
  pb?: Token<CSS.PaddingBottom, 'space'>;
  paddingLeft?: Token<CSS.PaddingLeft, 'space'>;
  pl?: Token<CSS.PaddingLeft, 'space'>;
  paddingInline?: Token<CSS.PaddingInline, 'space'>;
  pInline?: Token<CSS.PaddingInline, 'space'>;
  paddingInlineStart?: Token<CSS.PaddingInlineStart, 'space'>;
  ps?: Token<CSS.PaddingInlineStart, 'space'>;
  paddingInlineEnd?: Token<CSS.PaddingInlineEnd, 'space'>;
  pe?: Token<CSS.PaddingInlineEnd, 'space'>;
};

export type { SpaceProps };
export { spaceProps };
