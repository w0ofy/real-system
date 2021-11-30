import { Property } from 'csstype';

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  MarginProps,
  opacity,
  OpacityProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  StyledSystemColorProps,
  TextProps,
  typography,
} from '../internalExports/styledSystem';

import { RealSystemProps, realSystemProps } from './realSystemProps';

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
    grid,
    opacity,
    overflow,
    // real system props
    realSystemProps
  );

/** Workaround for color prop typing issue.
 * More info: https://spectrum.chat/styled-system/general/types-of-property-color-are-incompatible~9227ce42-00f2-473a-8924-f476f0ce6ae1
 * */
type ColorProps = Omit<StyledSystemColorProps, 'color'> & {
  color?: Property.Color | string;
};
type StyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    ColorProps &
    PositionProps &
    TextProps &
    GridProps &
    OpacityProps &
    OverflowProps &
    RealSystemProps
>;

export { composeStyleProps };
export type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  MarginProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  RealSystemProps,
  ShadowProps,
  SpaceProps,
  StyleProps,
  TextProps,
};
