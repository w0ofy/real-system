import React from 'react';

import type {
  ButtonPrimitiveProps,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import type { PaletteIntents, PaletteSizes } from '@real-system/theme';

export type ButtonSizes = Extract<PaletteSizes, 'sm' | 'md' | 'lg'>;
export type ButtonVariants = 'default' | 'primary' | 'minimal' | 'floating';
export type ButtonIntents =
  | 'default'
  | Extract<PaletteIntents, 'danger' | 'primary'>;
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;
type ButtonTypes = 'submit' | 'button' | 'reset';

export type ButtonProps = ButtonPrimitiveProps & {
  size?: ButtonSizes;
  children: React.ReactNode;
  tabIndex?: ButtonTabIndexes;
  disabled?: boolean;
  type?: ButtonTypes;
  variant?: ButtonVariants;
  intent?: ButtonIntents;
  loading?: boolean;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
};

export type InternalButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  buttonState: ButtonStates;
  ref?: any;
} & ButtonPrimitiveStyleProps;
