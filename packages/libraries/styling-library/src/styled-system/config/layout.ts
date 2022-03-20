import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const layoutProps: StylePropConfig<LayoutProps> = {
  display: true,
  visibility: true,
  position: true,
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
  scrollMargin: true,
  gap: {
    property: 'gap',
    scale: STYLE_PROP_SCALES.space,
  },
  verticalAlign: true,
  top: {
    property: 'top',
    scale: STYLE_PROP_SCALES.space,
  },
  right: {
    property: 'right',
    scale: STYLE_PROP_SCALES.space,
  },
  bottom: {
    property: 'bottom',
    scale: STYLE_PROP_SCALES.space,
  },
  left: {
    property: 'left',
    scale: STYLE_PROP_SCALES.space,
  },
  content: true,
  float: true,
  zIndex: {
    property: 'zIndex',
    scale: STYLE_PROP_SCALES.zIndices,
  },
  width: {
    property: 'width',
    scale: STYLE_PROP_SCALES.sizes,
  },
  height: {
    property: 'height',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minWidth: {
    property: 'minWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minHeight: {
    property: 'minHeight',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: STYLE_PROP_SCALES.sizes,
  },
  size: {
    properties: ['height', 'width'],
    scale: STYLE_PROP_SCALES.sizes,
  },
  boxSizing: true,
};

type LayoutProps = {
  display?: Token<CSS.Display>;
  visibility?: Token<CSS.Visibility>;
  position?: Token<CSS.Position>;
  alignItems?: Token<CSS.AlignItems>;
  alignContent?: Token<CSS.AlignContent>;
  justifyItems?: Token<CSS.JustifyItems>;
  justifyContent?: Token<CSS.JustifyContent>;
  flexWrap?: Token<CSS.FlexWrap>;
  flexDirection?: Token<CSS.FlexDirection>;
  flex?: Token<CSS.Flex>;
  flexGrow?: Token<CSS.FlexGrow>;
  flexShrink?: Token<CSS.FlexShrink>;
  flexBasis?: Token<CSS.FlexBasis>;
  justifySelf?: Token<CSS.JustifySelf>;
  alignSelf?: Token<CSS.AlignSelf>;
  order?: Token<CSS.Order>;
  overflow?: Token<CSS.Overflow>;
  overflowX?: Token<CSS.OverflowX>;
  overflowY?: Token<CSS.OverflowY>;
  scrollMargin?: Token<CSS.ScrollMargin, 'space'>;
  gap?: Token<CSS.Gap, 'space'>;
  verticalAlign?: Token<CSS.VerticalAlign>;
  top?: Token<CSS.Top, 'space'>;
  right?: Token<CSS.Right, 'space'>;
  bottom?: Token<CSS.Bottom, 'space'>;
  left?: Token<CSS.Left, 'space'>;
  content?: Token<CSS.Content, 'space'>;
  float?: Token<CSS.Float, 'space'>;
  zIndex?: Token<CSS.ZIndex, 'zIndices'>;
  width?: Token<CSS.Width, 'sizes'>;
  height?: Token<CSS.Height, 'sizes'>;
  minWidth?: Token<CSS.MinWidth, 'sizes'>;
  minHeight?: Token<CSS.MinHeight, 'sizes'>;
  maxWidth?: Token<CSS.MaxWidth, 'sizes'>;
  maxHeight?: Token<CSS.MaxHeight, 'sizes'>;
  size?: Token<CSS.Height | CSS.Width, 'sizes'>;
  boxSizing?: Token<CSS.BoxSizing>;
};

export type { LayoutProps };
export { layoutProps };
