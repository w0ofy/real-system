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
  /** testid for unit testing libraries like @testing-library/react */
  'data-testid'?: string;
  /** generually used for inputs and labels */
  htmlFor?: string | undefined;
};

export type BoxSVGElementProps = Omit<
  React.SVGAttributes<SVGElement>,
  keyof BoxStyleProps
> &
  BoxComponentProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
export type BoxElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof BoxStyleProps
> &
  BoxComponentProps;

export type BoxProps = BoxElementProps & BoxStyleProps;
