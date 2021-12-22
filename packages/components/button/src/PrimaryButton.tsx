import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@real-system/box';
import { ButtonPrimitive } from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const primaryStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand-inverse',
    backgroundColor: 'color-background-brand',
    _hover: {
      backgroundColor: 'color-background-brand-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-brand-strong-3',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger-inverse',
    backgroundColor: 'color-background-danger',
    _hover: {
      backgroundColor: 'color-background-danger-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-danger-strong-3',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
  }),
};

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral-inverse',
    backgroundColor: 'color-background-neutral',
    _hover: {
      backgroundColor: 'color-background-neutral-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-neutral-strong-3',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: defaultStyles,
  primary: primaryStyles,
  danger: dangerStyles,
};

const PrimaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
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

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
