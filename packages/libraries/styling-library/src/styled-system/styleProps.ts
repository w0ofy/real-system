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
} from './config';
import { styleProps } from './config';

const getStyleProps = system(styleProps);

type StylePropNames = keyof StyleProps;

const STYLE_PROPS = Object.keys(styleProps) as StylePropNames[];

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
export { getStyleProps, STYLE_PROPS };
