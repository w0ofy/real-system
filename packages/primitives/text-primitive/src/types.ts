import React from 'react';

import type { StylishProps } from '@real-system/styling-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
type TextElementProps = {
  as: keyof JSX.IntrinsicElements;
  /** href html attribute for anchor elements */
  href?: string;
  /** Typed as any because Text can be any HTML element */
  ref?: any | null;
  /** rel html attribute */
  rel?: string;
  target?: string;
  /** element identifier for customization */
  element?: string;
  /** variant for variant styling */
  variant?: string;
  /** text to be rendered */
  children?: React.ReactNode;
} & RealSystemElementProps;

type TextPrimitiveProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof TextElementProps | keyof StylishProps
> &
  TextElementProps &
  StylishProps;

export type { TextPrimitiveProps };
