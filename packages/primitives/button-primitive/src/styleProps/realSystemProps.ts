import { Property } from 'csstype';

import { system } from '@real-system/styling-library';

const realSystemProps = system({
  // text control props
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
  // misc
  appearance: true,
  borderSpacing: true,
  boxSizing: true,
  content: true,
  float: true,
  userSelect: true,
  willChange: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
});

type RealSystemProps = {
  // text control props
  whiteSpace?: Property.WhiteSpace;
  textOverflow?: Property.TextOverflow;
  wordBreak?: Property.WordBreak;
  wordWrap?: Property.WordWrap;
  overflowWrap?: Property.OverflowWrap;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;
  // outline / focus props
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
  // misc
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

export { realSystemProps };
export type { RealSystemProps };
