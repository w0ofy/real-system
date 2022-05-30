import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const layoutProps: StylePropConfig<LayoutProps> = {
  display: true,
  d: {
    property: 'display',
  },
  visibility: true,
  position: true,
  pos: {
    property: 'position',
  },
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
  w: {
    property: 'width',
    scale: STYLE_PROP_SCALES.sizes,
  },
  height: {
    property: 'height',
    scale: STYLE_PROP_SCALES.sizes,
  },
  h: {
    property: 'height',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minWidth: {
    property: 'minWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minW: {
    property: 'minWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minHeight: {
    property: 'minHeight',
    scale: STYLE_PROP_SCALES.sizes,
  },
  minH: {
    property: 'minHeight',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxW: {
    property: 'maxWidth',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: STYLE_PROP_SCALES.sizes,
  },
  maxH: {
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
  /**
   * The CSS `display` property
   */
  display?: Token<CSS.Display>;
  /**
   * The shorthand for CSS `display` property
   */
  d?: Token<CSS.Display>;
  /**
   * The CSS `visibility` property
   */
  visibility?: Token<CSS.Visibility>;
  /**
   * The CSS `position` property
   */
  position?: Token<CSS.Position>;
  /**
   * The shorthand for CSS `position` property
   */
  pos?: Token<CSS.Position>;
  /**
   * The CSS `align-items` property
   */
  alignItems?: Token<CSS.AlignItems>;
  /**
   * The CSS `align-content` property
   */
  alignContent?: Token<CSS.AlignContent>;
  /**
   * The CSS `justify-items` property
   */
  justifyItems?: Token<CSS.JustifyItems>;
  /**
   * The CSS `justify-content` property
   */
  justifyContent?: Token<CSS.JustifyContent>;
  /**
   * The CSS `flex-wrap` property
   */
  flexWrap?: Token<CSS.FlexWrap>;
  /**
   * The CSS `flex-direction` property
   */
  flexDirection?: Token<CSS.FlexDirection>;
  /**
   * The CSS `flex` property
   */
  flex?: Token<CSS.Flex>;
  /**
   * The CSS `flex-grow` property
   */
  flexGrow?: Token<CSS.FlexGrow>;
  /**
   * The CSS `flex-shrink` property
   */
  flexShrink?: Token<CSS.FlexShrink>;
  /**
   * The CSS `flex-basis` property
   */
  flexBasis?: Token<CSS.FlexBasis>;
  /**
   * The CSS `justify-self` property
   */
  justifySelf?: Token<CSS.JustifySelf>;
  /**
   * The CSS `align-self` property
   */
  alignSelf?: Token<CSS.AlignSelf>;
  /**
   * The CSS `order` property
   */
  order?: Token<CSS.Order>;
  /**
   * The CSS `overflow` property
   */
  overflow?: Token<CSS.Overflow>;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: Token<CSS.OverflowX>;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: Token<CSS.OverflowY>;
  /**
   * The CSS `scroll-margin` property
   */
  scrollMargin?: Token<CSS.ScrollMargin, 'space'>;
  /**
   * The CSS `gap` property
   */
  gap?: Token<CSS.Gap, 'space'>;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: Token<CSS.VerticalAlign>;
  /**
   * The CSS `top` property
   */
  top?: Token<CSS.Top, 'space'>;
  /**
   * The CSS `right` property
   */
  right?: Token<CSS.Right, 'space'>;
  /**
   * The CSS `bottom` property
   */
  bottom?: Token<CSS.Bottom, 'space'>;
  /**
   * The CSS `left` property
   */
  left?: Token<CSS.Left, 'space'>;
  /**
   * The CSS `content` property
   */
  content?: Token<CSS.Content, 'space'>;
  /**
   * The CSS `float` property
   */
  float?: Token<CSS.Float, 'space'>;
  /**
   * The CSS `z-index` property
   */
  zIndex?: Token<CSS.ZIndex, 'zIndices'>;
  /**
   * The CSS `width` property
   */
  width?: Token<CSS.Width, 'sizes'>;
  /**
   * The shorthand for CSS `width` property
   */
  w?: Token<CSS.Width, 'sizes'>;
  /**
   * The CSS `height` property
   */
  height?: Token<CSS.Height, 'sizes'>;
  /**
   * The shorthand for CSS `height` property
   */
  h?: Token<CSS.Height, 'sizes'>;
  /**
   * The CSS `min-width` property
   */
  minWidth?: Token<CSS.MinWidth, 'sizes'>;
  /**
   * The shorthand for CSS `min-width` property
   */
  minW?: Token<CSS.MinWidth, 'sizes'>;
  /**
   * The CSS `min-height` property
   */
  minHeight?: Token<CSS.MinHeight, 'sizes'>;
  /**
   * The shorthand for CSS `min-height` property
   */
  minH?: Token<CSS.MinHeight, 'sizes'>;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: Token<CSS.MaxWidth, 'sizes'>;
  /**
   * The shorthand for CSS `max-width` property
   */
  maxW?: Token<CSS.MaxWidth, 'sizes'>;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: Token<CSS.MaxHeight, 'sizes'>;
  /**
   * The shorthand for CSS `max-height` property
   */
  maxH?: Token<CSS.MaxHeight, 'sizes'>;
  /**
   * The shorthand to apply CSS `height` and `width` properties
   */
  size?: Token<CSS.Height | CSS.Width, 'sizes'>;
  /**
   * The CSS `boxSizing` property
   */
  boxSizing?: Token<CSS.BoxSizing>;
};

export type { LayoutProps };
export { layoutProps };
