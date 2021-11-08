import React from 'react';

import { BoxStyleProps } from '@real-system/box';
import { SpaceProps } from '@real-system/styling';
import { PaletteIntents } from '@real-system/theme';

export type ButtonSizes = 'small' | 'default';
export type ButtonVariants = 'primary' | 'secondary' | 'ghost';
export type ButtonIntents =
  | 'default'
  | Extract<PaletteIntents, 'danger' | 'neutral'>;
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;
type ButtonTypes = 'submit' | 'button' | 'reset';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  SpaceProps & {
    size?: ButtonSizes;
    children: React.ReactNode;
    /** @todo add fullwidth feature */
    // fullWidth?: boolean;
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
