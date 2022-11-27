import type {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  InteractivityProps,
  LayoutProps,
  MiscellaneousProps,
  SpaceProps,
  StylePropNames,
  /** all style types */
  StyleProps,
  /** style prop scale names */
  StylePropScaleNames,
  TransformProps,
  TypographyProps,
} from '../config';
import { styleProps } from '../config';

const STYLE_PROPS = Object.keys(styleProps) as StylePropNames[];

const isStyleProp = (prop: PropertyKey) => prop in styleProps;
const isNotStyleProp = (prop: PropertyKey) => !(prop in styleProps);

export type {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  InteractivityProps,
  LayoutProps,
  MiscellaneousProps,
  SpaceProps,
  StylePropNames,
  StyleProps,
  StylePropScaleNames,
  TransformProps,
  TypographyProps,
};
export { isNotStyleProp, isStyleProp, STYLE_PROPS };
