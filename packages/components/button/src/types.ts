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
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  onPress?: ButtonPrimitiveProps['onPress'];
  tabIndex?: ButtonTabIndexes;
  type?: ButtonTypes;
  variant?: ButtonVariants;
  intent?: ButtonIntents;
  size?: ButtonSizes;
};

export type InternalButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  buttonState: ButtonStates;
  ref?: any;
} & ButtonPrimitiveStyleProps;
