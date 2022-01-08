import { Property } from 'csstype';

import {
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
} from '@real-system/styling-library';

import { RealSystemProps, realSystemProps } from './realSystemProps';

const composeTextStyleProps = (): ReturnType<typeof compose> =>
  compose(
    // styled-system props
    space,
    flexbox,
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
type TextBaseStyleProps = Partial<
  PositionProps &
    ShadowProps &
    SpaceProps &
    TypographyProps &
    LayoutProps &
    ColorProps &
    FlexboxProps &
    RealSystemProps
>;

export {
  color,
  composeTextStyleProps,
  flexbox,
  layout,
  position,
  // real system props
  shadow,
  space,
  typography,
};
export type {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextBaseStyleProps,
  TypographyProps,
};
