import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const spaceProps: StylePropConfig<SpaceProps> = {
  margin: {
    property: 'margin',
    scale: STYLE_PROP_SCALES.space,
  },
  marginX: {
    properties: ['marginRight', 'marginLeft'],
    scale: STYLE_PROP_SCALES.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: STYLE_PROP_SCALES.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: STYLE_PROP_SCALES.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: STYLE_PROP_SCALES.space,
  },
  padding: {
    property: 'padding',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingX: {
    properties: ['paddingRight', 'paddingLeft'],
    scale: STYLE_PROP_SCALES.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: STYLE_PROP_SCALES.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: STYLE_PROP_SCALES.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: STYLE_PROP_SCALES.space,
  },
};

type SpaceProps = {
  margin?: Token<CSS.Margin, 'space'>;
  marginX?: Token<CSS.Margin, 'space'>;
  marginY?: Token<CSS.Margin, 'space'>;
  marginTop?: Token<CSS.MarginTop, 'space'>;
  marginRight?: Token<CSS.MarginRight, 'space'>;
  marginBottom?: Token<CSS.MarginBottom, 'space'>;
  marginLeft?: Token<CSS.MarginLeft, 'space'>;
  padding?: Token<CSS.Padding, 'space'>;
  paddingX?: Token<CSS.Padding, 'space'>;
  paddingY?: Token<CSS.Padding, 'space'>;
  paddingTop?: Token<CSS.PaddingTop, 'space'>;
  paddingRight?: Token<CSS.PaddingRight, 'space'>;
  paddingBottom?: Token<CSS.PaddingBottom, 'space'>;
  paddingLeft?: Token<CSS.PaddingLeft, 'space'>;
};

export type { SpaceProps };
export { spaceProps };
