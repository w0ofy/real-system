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

const textWrap = system({
  whiteSpace: true,
});

const composeStyleProps = () =>
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
export type SafeColorProps = Omit<SSColorProps, 'color'> & { color?: any };
export type StyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    SafeColorProps &
    PositionProps &
    TypographyProps &
    TextWrapProps
>;

const STYLE_PROPS = [
  ...background.propNames!,
  ...space.propNames!,
  ...flexbox.propNames!,
  ...border.propNames!,
  ...layout.propNames!,
  ...color.propNames!,
  ...shadow.propNames!,
  ...position.propNames!,
  ...typography.propNames!,
  ...textWrap.propNames!,
];

export { composeStyleProps, STYLE_PROPS, textWrap };
