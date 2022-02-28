import type { StylishProps } from '@real-system/styling-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

type BoxStyleProps = StylishProps;

type BoxComponentProps = {
  as?: keyof JSX.IntrinsicElements;
  type?: string;
  /** Typed as any because Box can be any HTML element */
  ref?: any | null;
  // image props
  alt?: string;
  src?: string;
  // link props
  href?: string;
  rel?: string;
  target?: string;
  //  select props
  multiple?: boolean;
  // optgroup props
  label?: string;
  datetime?: string;
  /** variant for variant styling */
  variant?: string;
  /** generually used for inputs and labels */
  htmlFor?: string | undefined;
} & RealSystemElementProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
type HTMLElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof StylishProps
>;

type BoxProps = Partial<HTMLElementProps> & BoxComponentProps & BoxStyleProps;

export type { BoxProps, BoxStyleProps };
