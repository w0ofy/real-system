import React, { forwardRef } from 'react';

import { BoxProps, BoxStyleProps } from '@real-system/box';
import { ButtonPrimitive } from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand-strong-3',
    backgroundColor: 'color-background',
    borderColor: 'color-border-brand-strong-3',
    _hover: {
      color: 'color-text-brand-strong-6',
      backgroundColor: 'color-background-brand-weak-9',
      borderColor: 'color-border-brand-strong-6',
    },
    _active: {
      color: 'color-text-brand-strong-9',
      backgroundColor: 'color-background-brand-weak-6',
      borderColor: 'color-border-brand-strong-9',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
    borderColor: 'color-border-brand-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
    borderColor: 'color-border-brand-weak-9',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger',
    backgroundColor: 'color-background',
    borderColor: 'color-border-danger',
    _hover: {
      color: 'color-text-danger-strong-6',
      backgroundColor: 'color-background-danger-weak-9',
      borderColor: 'color-border-danger-strong-6',
    },
    _active: {
      color: 'color-text-danger-strong-9',
      backgroundColor: 'color-background-danger-weak-6',
      borderColor: 'color-border-danger-strong-9',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
    borderColor: 'color-border-danger-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
    borderColor: 'color-border-danger-weak-9',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'color-background',
    borderColor: 'color-border-neutral',
    _hover: {
      color: 'color-text-neutral-strong-6',
      backgroundColor: 'color-background-neutral-weak-9',
      borderColor: 'color-border-neutral-strong-6',
    },
    _active: {
      color: 'color-text-neutral-strong-9',
      backgroundColor: 'color-background-neutral-weak-6',
      borderColor: 'color-border-neutral-strong-9',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
    borderColor: 'color-border-neutral-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
    borderColor: 'color-border-neutral-weak-9',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: defaultStyles,
  danger: dangerStyles,
  neutral: neutralStyles,
};

export type ButtonProps = Partial<BoxProps> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonState: ButtonStates;
};

const SecondaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'default', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <ButtonPrimitive
        {...STYLE_MAP[intent][buttonState]}
        {...restProps}
        ref={ref}>
        {children}
      </ButtonPrimitive>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };
