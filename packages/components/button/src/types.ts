import React from 'react';

import type { BoxStyleProps } from '@real-system/box';
import type { ButtonAriaProps } from '@real-system/button-primitive';
import type { PaletteIntents } from '@real-system/theme';

export type ButtonSizes = 'small' | 'medium' | 'large';
export type ButtonVariants = 'default' | 'primary' | 'minimal' | 'floating';
export type ButtonIntents =
  | 'default'
  | Extract<PaletteIntents, 'danger' | 'primary'>;
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;
type ButtonTypes = 'submit' | 'button' | 'reset';

export type ButtonProps = ButtonAriaProps &
  Omit<BoxStyleProps, 'size'> & {
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
} & BoxStyleProps;
