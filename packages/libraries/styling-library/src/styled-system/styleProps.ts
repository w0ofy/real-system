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
import type { PseudoProps } from './pseudoProps';

const getStyleProps = system(styleProps);

const STYLE_PROPS = Object.keys(styleProps) as (keyof StyleProps)[];

/**
 * Includes style props and pseudo style props
 */
type StylishProps = StyleProps & PseudoProps;

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
  StyleProps,
  StylePropScaleNames,
  StylishProps,
  TransformProps,
  TypographyProps,
};
export { getStyleProps, STYLE_PROPS };
