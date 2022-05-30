import type {
  As,
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  RealSystemElementProps,
  SpaceProps,
  TypographyProps,
} from '@real-system/styled-library';

type BoxStyleProps = BackgroundProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

/**
 * All box props
 */
type BoxProps<T extends As = As> = RealSystemElementProps<T> &
  BoxStyleProps & { as?: T };
export type { BoxProps, BoxStyleProps };
