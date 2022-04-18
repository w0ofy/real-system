import { system } from 'styled-system';

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
  /** all style types */
  StyleProps,
  /** style prop scale names */
  StylePropScaleNames,
  TransformProps,
  TypographyProps,
} from '../config';
import { styleProps } from '../config';

const getStyleProps = system(styleProps);

type StylePropNames = keyof StyleProps;

const STYLE_PROPS = Object.keys(styleProps) as StylePropNames[];

const isStyleProp = (prop: PropertyKey) => !!styleProps[prop];
const isNotStyleProp = (prop: PropertyKey) => !styleProps[prop];

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
export { getStyleProps, isNotStyleProp, isStyleProp, STYLE_PROPS };
