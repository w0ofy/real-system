import type {
  As,
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  RealSystemElementProps,
  SpaceProps,
} from '@real-system/styled-library';

type BoxStyleProps = BackgroundProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps;

/**
 * All box props
 */
type BoxProps<T extends As = any> = RealSystemElementProps<T> &
  BoxStyleProps & { as?: T };
export type { BoxProps, BoxStyleProps };
