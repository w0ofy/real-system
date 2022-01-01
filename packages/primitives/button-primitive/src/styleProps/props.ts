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
  layout,
  LayoutProps,
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

const composeButtonPrimitiveStyleProps = (): ReturnType<typeof compose> =>
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
type ButtonPrimitiveBaseStyleProps = Partial<
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

export { composeButtonPrimitiveStyleProps };
export type {
  BackgroundProps,
  BorderProps,
  ButtonPrimitiveBaseStyleProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
};
