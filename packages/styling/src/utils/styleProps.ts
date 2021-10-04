import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps as SSColorProps,
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
  system,
  typography,
  TypographyProps,
} from 'styled-system';

export const textWrap = system({
  whiteSpace: true,
});

export const composeStyleProps = () =>
  compose(
    background,
    space,
    flexbox,
    border,
    layout,
    color,
    shadow,
    position,
    typography,
    textWrap
  );

export type TextWrapProps = {
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
    | 'initial'
    | 'inherit';
};

/** Workaround for color prop typing issue.
 * More info: https://spectrum.chat/styled-system/general/types-of-property-color-are-incompatible~9227ce42-00f2-473a-8924-f476f0ce6ae1
 * */
type ColorProps = Omit<SSColorProps, 'color'> & { color?: any };

export type StyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    ColorProps &
    PositionProps &
    TypographyProps &
    TextWrapProps
>;
