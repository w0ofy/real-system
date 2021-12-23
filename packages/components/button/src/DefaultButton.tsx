import React, { forwardRef } from 'react';

import { BoxProps, BoxStyleProps } from '@real-system/box';
import { ButtonPrimitive } from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const primaryStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'color-background',
    borderColor: 'color-border-brand-weak-6',
    _hover: {
      color: 'color-text-brand-strong-1',
      backgroundColor: 'color-background-brand-weak-9',
      borderColor: 'color-border-brand-weak-3',
    },
    _active: {
      color: 'color-text-brand-strong-3',
      backgroundColor: 'color-background-brand-weak-8',
      borderColor: 'color-border-brand-strong-1',
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
    borderColor: 'color-border-danger-weak-6',
    _hover: {
      color: 'color-text-danger-strong-1',
      backgroundColor: 'color-background-danger-weak-9',
      borderColor: 'color-border-danger-weak-3',
    },
    _active: {
      color: 'color-text-danger-strong-3',
      backgroundColor: 'color-background-danger-weak-8',
      borderColor: 'color-border-danger-strong-1',
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

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'color-background',
    borderColor: 'color-border-neutral-weak-6',
    _hover: {
      color: 'color-text-neutral-strong-1',
      backgroundColor: 'color-background-neutral-weak-9',
      borderColor: 'color-border-neutral-weak-3',
    },
    _active: {
      color: 'color-text-neutral-strong-3',
      backgroundColor: 'color-background-neutral-weak-8',
      borderColor: 'color-border-neutral-strong-1',
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
  primary: primaryStyles,
  danger: dangerStyles,
};

export type ButtonProps = Partial<Button> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonState: ButtonStates;
};

const DefaultButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
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

DefaultButton.displayName = 'DefaultButton';

export { DefaultButton };
