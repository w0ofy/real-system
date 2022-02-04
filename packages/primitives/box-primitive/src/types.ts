import type { RealSystemElementProps } from '@real-system/types-library';

import type { BoxBaseStyleProps } from './styleProps/props';
import { PSEUDO_PROP_STYLES } from './styleProps/pseudoPropStyles';

export type BoxPseudoStyleProps = {
  [key in keyof typeof PSEUDO_PROP_STYLES]?: BoxBaseStyleProps;
};

export type BoxStyleProps = BoxBaseStyleProps & BoxPseudoStyleProps;

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

export type BoxAsSVGElementProps = Omit<
  React.SVGProps<SVGElement>,
  keyof BoxStyleProps
> &
  BoxComponentProps &
  BoxStyleProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
export type BoxElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof BoxStyleProps
> &
  BoxComponentProps &
  BoxStyleProps;

export type BoxProps = BoxElementProps & BoxStyleProps;
