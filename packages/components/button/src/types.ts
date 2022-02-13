import React from 'react';

import type {
  ButtonPrimitiveProps,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import type { PaletteIntents, PaletteSizes } from '@real-system/theme-library';

export type ButtonSizes = Extract<PaletteSizes, 'sm' | 'md' | 'lg'>;
export type ButtonVariants = 'default' | 'primary' | 'minimal' | 'floating';
export type ButtonIntents = Extract<
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
  intent?: ButtonIntents;
  /** controls the size of the button */
  size?: ButtonSizes;
};

export type InternalButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  buttonState: ButtonStates;
  ref?: any;
} & ButtonPrimitiveStyleProps;
