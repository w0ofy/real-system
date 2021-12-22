import { Property } from 'csstype';

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps as StyledSystemColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
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
  typography,
  TypographyProps,
} from '@real-system/styling';

import { RealSystemProps, realSystemProps } from './realSystemProps';

const composeBoxStyleProps = (): ReturnType<typeof compose> =>
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
type BoxBaseStyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    ColorProps &
    PositionProps &
    TypographyProps &
    GridProps &
    OpacityProps &
    OverflowProps &
    RealSystemProps
>;

export {
  background,
  border,
  color,
  composeBoxStyleProps,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  shadow,
  space,
  typography,
};
export type {
  BackgroundProps,
  BorderProps,
  BoxBaseStyleProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
};
