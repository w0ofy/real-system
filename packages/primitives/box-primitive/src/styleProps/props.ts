import { Property } from 'csstype';

import {
  // PROPS: background
  background,
  BackgroundProps,
  // PROPS: border
  border,
  BorderProps,
  // PROPS: color (includes opacity)
  color,
  ColorProps as StyledSystemColorProps,
  // FUNCTION: compose
  compose,
  // PROPS: flexbox
  flexbox,
  FlexboxProps,
  // PROPS: layout (includes overflow)
  layout,
  LayoutProps,
  // PROPS: position
  position,
  PositionProps,
  // PROPS: shadow
  shadow,
  ShadowProps,
  // PROPS: space
  space,
  SpaceProps,
  // PROPS: typography
  typography,
  TypographyProps,
} from '@real-system/styling-library';

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
    RealSystemProps
>;

export {
  background,
  border,
  color,
  composeBoxStyleProps,
  flexbox,
  layout,
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
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
};
