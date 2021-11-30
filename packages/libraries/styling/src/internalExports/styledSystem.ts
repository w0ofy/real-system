import type {
  BackgroundProps,
  BorderProps,
  ColorProps as StyledSystemColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  MarginProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  /**
   * Renamed TypographyProps from styled-system
   *
   * Named `TextProps` instead of `TypographyProps` because:
   * Module '@real-system/typography' has exported a type declaration
   * named 'TypographyProps' for the `Typography` component
   */
  TypographyProps as TextProps,
} from 'styled-system';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  margin,
  opacity,
  overflow,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

export {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  margin,
  opacity,
  overflow,
  position,
  shadow,
  space,
  system,
  typography,
};

export type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  MarginProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  StyledSystemColorProps,
  TextProps,
};
