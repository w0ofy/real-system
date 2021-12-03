import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';
import type { BoxBaseStyleProps } from './styleProps';

export type BoxPseudoStyleProps = {
  [key in keyof typeof PSEUDO_PROP_STYLES]?: BoxBaseStyleProps;
};

export type BoxStyleProps = BoxBaseStyleProps & BoxPseudoStyleProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
export type BoxElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof BoxStyleProps
> & {
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
  /** element identifier for customization */
  element?: string;
  /** variant for variant styling */
  variant?: string;
  /** testid for unit testing libraries like @testing-library/react */
  'data-testid'?: string;
  /** generually used for inputs and labels */
  htmlFor?: string | undefined;
};

export type BoxProps = BoxElementProps & BoxStyleProps;
