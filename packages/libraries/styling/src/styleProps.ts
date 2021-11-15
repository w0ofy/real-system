import { Property } from 'csstype';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps as SSColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  LetterSpacingProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  letterSpacing,
  opacity,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

const realSystemProps = system({
  whiteSpace: true,
  textOverflow: true,
  wordBreak: true,
  wordWrap: true,
  overflowWrap: true,
  textTransform: true,
  textDecoration: true,
  // outline / focus props
  outline: true,
  outlineColor: {
    property: 'outlineColor',
    scale: 'colors',
  },
  outlineWidth: {
    property: 'outlineWidth',
    scale: 'borderWidths',
  },
  outlineOffset: true,
  outlineStyle: true,
  // cursor props
  cursor: true,
  pointerEvents: true,
  // transition props
  transition: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  // animation props
  animation: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: true,
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationTimingFunction: true,
  // svg props
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: {
    property: 'strokeWidth',
    scale: 'borderWidths',
  },
  fill: true,
  fillOpacity: true,
  fillRule: true,
  clip: true,
  // list
  listStyle: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  // misc
  appearance: true,
  borderSpacing: true,
  boxSizing: true,
  content: true,
  float: true,
  userSelect: true,
  willChange: true,
  resize: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
});

const composeStyleProps = (): ReturnType<typeof compose> =>
  compose(
    // styled-system props
    background,
    space,
    flexbox,
    border,
    layout,
    color,
    shadow,
    position,
    typography,
    letterSpacing,
    grid,
    opacity,
    // real system props
    realSystemProps
  );

type RealSystemProps = {
  whiteSpace?: Property.WhiteSpace;
  textOverflow?: Property.TextOverflow;
  wordBreak?: Property.WordBreak;
  wordWrap?: Property.WordWrap;
  overflowWrap?: Property.OverflowWrap;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;

  // outline props
  outline?: Property.Outline<string>;
  outlineOffset?: Property.OutlineOffset;
  outlineStyle?: Property.OutlineStyle;
  outlineColor?: Property.OutlineColor;
  outlineWidth?: Property.OutlineWidth;

  // cursor props
  cursor?: Property.Cursor;
  pointerEvents?: Property.PointerEvents;
  // transition props
  transition?: Property.Transition;
  transitionDelay?: Property.TransitionDelay;
  transitionDuration?: Property.TransitionDuration;
  transitionProperty?: Property.TransitionProperty;
  transitionTimingFunction?: Property.TransitionTimingFunction;
  // animation props
  animation?: Property.Animation;
  animationDelay?: Property.AnimationDelay;
  animationDirection?: Property.AnimationDirection;
  animationDuration?: Property.AnimationDuration;
  animationFillMode?: Property.AnimationFillMode;
  animationIterationCount?: Property.AnimationIterationCount;
  animationName?: Property.AnimationName;
  animationPlayState?: Property.AnimationPlayState;
  animationTimingFunction?: Property.AnimationTimingFunction;
  // svg props
  stroke?: Property.Stroke;
  strokeDasharray?: Property.StrokeDasharray;
  strokeDashoffset?: Property.StrokeDashoffset;
  strokeLinecap?: Property.StrokeLinecap;
  strokeLinejoin?: Property.StrokeLinejoin;
  strokeMiterlimit?: Property.StrokeMiterlimit;
  strokeOpacity?: Property.StrokeOpacity;
  strokeWidth?: Property.StrokeWidth;
  fill?: Property.Fill;
  fillOpacity?: Property.FillOpacity;
  fillRule?: Property.FillRule;
  clip?: Property.Clip;
  objectFit?: Property.ObjectFit;
  objectPosition?: Property.ObjectPosition<string>;

  listStyle?: Property.ListStyle;
  listStyleType?: Property.ListStyleType;
  listStylePosition?: Property.ListStylePosition;
  listStyleImage?: Property.ListStyleImage;

  appearance?: Property.Appearance;
  borderSpacing?: Property.BorderSpacing<string>;
  boxSizing?: Property.BoxSizing;
  content?: string;
  float?: Property.Float;
  userSelect?: Property.UserSelect;
  willChange?: Property.WillChange;
  resize?: Property.Resize;
  transform?: Property.Transform;
  transformOrigin?: Property.TransformOrigin<string>;
};

/** Workaround for color prop typing issue.
 * More info: https://spectrum.chat/styled-system/general/types-of-property-color-are-incompatible~9227ce42-00f2-473a-8924-f476f0ce6ae1
 * */
type SafeColorProps = Omit<SSColorProps, 'color'> & {
  color?: Property.Color | string;
};
type StyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    SafeColorProps &
    PositionProps &
    TypographyProps &
    LetterSpacingProps &
    GridProps &
    OpacityProps &
    RealSystemProps
>;

type MarginProps = Pick<
  SpaceProps,
  | 'mx'
  | 'my'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'm'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginX'
  | 'marginY'
>;
type TextProps = TypographyProps;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const STYLE_PROPS = composeStyleProps().propNames!;

export { composeStyleProps, realSystemProps, STYLE_PROPS };
export type { MarginProps, RealSystemProps, StyleProps, TextProps };
