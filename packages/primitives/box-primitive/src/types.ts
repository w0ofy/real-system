import type {
  As,
  RealSystemComponentProps,
  StylishProps,
} from '@real-system/styling-library';

type BoxStyleProps = StylishProps;

/**
 * All box props
 */
type BoxProps<T extends As = any> = RealSystemComponentProps<T>;
export type { BoxProps, BoxStyleProps };
