import { Property } from 'csstype';

import {
  color,
  ColorProps as StyledSystemColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
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

import { realSystemProps } from './realSystemProps';
import { RealSystemProps } from '.';

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
type TextBaseStyleProps = Partial<
  OverflowProps &
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
  overflow,
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
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextBaseStyleProps,
  TypographyProps,
};
