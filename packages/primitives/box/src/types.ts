import type { Property } from 'csstype';

import type { StyleProps } from '@real-system/styling';

import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';

export type BoxBaseStyleProps = StyleProps & {
  animation?: Property.Animation;
  appearance?: Property.Appearance;
  borderCollapse?: Property.BorderCollapse;
  borderSpacing?: Property.BorderSpacing<string>;
  boxSizing?: Property.BoxSizing;
  clip?: Property.Clip;
  content?: string;
  cursor?: Property.Cursor;
  float?: Property.Float;
  fontVariantNumeric?: Property.FontVariantNumeric;
  listStyleImage?: Property.ListStyleImage;
  listStylePosition?: Property.ListStylePosition;
  listStyleType?: Property.ListStyleType;
  objectFit?: Property.ObjectFit;
  objectPosition?: Property.ObjectPosition<string>;
  opacity?: Property.Opacity;
  outline?: Property.Outline<string>;
  pointerEvents?: Property.PointerEvents;
  resize?: Property.Resize;
  tableLayout?: Property.TableLayout;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;
  transform?: Property.Transform;
  transformOrigin?: Property.TransformOrigin<string>;
  transition?: Property.Transition;
  userSelect?: Property.UserSelect;
  visibility?: Property.Visibility;
  willChange?: Property.WillChange;
};

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
};

export type BoxProps = BoxElementProps & BoxStyleProps;
