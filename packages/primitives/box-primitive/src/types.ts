import type { StylishProps } from '@real-system/styling-library';
import type { Dict, RealSystemElementProps } from '@real-system/utils-library';

type BoxStyleProps = StylishProps;

/**
 * Real system Box specific props
 */
type BoxComponentProps<GivenProps = Dict> = {
  as?: keyof JSX.IntrinsicElements | React.FunctionComponent<GivenProps>;
  /** Typed as any because Box can be any HTML or SVG element */
  ref?: any;
} & RealSystemElementProps;

/**
 * Omits potential clashes from our `StylishProps` props with `HTMLAttributes` (i.e. color)
 */
type HTMLElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof StylishProps
>;

/**
 * All box props
 */
type BoxProps<GivenProps = Dict> = Partial<HTMLElementProps> &
  BoxComponentProps<GivenProps> &
  BoxStyleProps;

export type { BoxProps, BoxStyleProps };
