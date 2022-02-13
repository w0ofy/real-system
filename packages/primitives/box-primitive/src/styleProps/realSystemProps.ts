import { Property } from 'csstype';

import { system } from '@real-system/styling-library';

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
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
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
  filter: {
    property: 'filter',
    scale: 'filters',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  fillOpacity: true,
  fillRule: true,
  clip: true,
  clipPath: true,
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
  // grid or flex props
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

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
  filter?: Property.Filter;
  fill?: Property.Fill;
  fillOpacity?: Property.FillOpacity;
  fillRule?: Property.FillRule;
  clip?: Property.Clip;
  clipPath?: Property.ClipPath;
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

  gap?: Property.Gap | number;
};

export { realSystemProps };
export type { RealSystemProps };
