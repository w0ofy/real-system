import React from 'react';

import type { ButtonPrimitiveProps } from '@real-system/button-primitive';
import type { PaletteIntents, PaletteSizes } from '@real-system/theme-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

export type ButtonVariants = 'default' | 'primary' | 'minimal' | 'floating';
export type ButtonSize = Extract<PaletteSizes, 'sm' | 'md' | 'lg'>;
export type ButtonIntent = Extract<
  PaletteIntents,
  'danger' | 'primary' | 'neutral' | 'success'
>;
export type ButtonStates = 'disabled' | 'loading' | 'default';

export type ButtonProps = ButtonPrimitiveProps & {
  /** sets the loading state of the buttons */
  loading?: boolean;
  /** inserts a leading icon */
  leadingIcon?: React.ReactElement;
  /** inserts a trailing icon */
  trailingIcon?: React.ReactElement;
  /** controls button variant */
  variant?: ButtonVariants;
  /** controls the intent of the button */
  intent?: ButtonIntent;
  /** controls the size of the button */
  size?: ButtonSize;
} & RealSystemElementProps;
