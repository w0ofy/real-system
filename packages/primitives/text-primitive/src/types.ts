import type { TextBaseStyleProps } from './styleProps/props';
import { PSEUDO_PROP_STYLES } from './styleProps/pseudoPropStyles';

export type TextPseudoStyleProps = {
  [key in keyof typeof PSEUDO_PROP_STYLES]?: TextBaseStyleProps;
};

export type TextStyleProps = TextBaseStyleProps & TextPseudoStyleProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
export type TextElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'color'
> & {
  as: keyof JSX.IntrinsicElements;
  href?: string;
  /** Typed as any because Text can be any HTML element */
  ref?: any | null;
  rel?: string;
  target?: string;
  dateTime?: string;
  /** element identifier for customization */
  element?: string;
  /** variant for variant styling */
  variant?: string;
};

export type TextProps = TextElementProps & TextStyleProps;
