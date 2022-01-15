import React, { forwardRef } from 'react';

import {
  ButtonPrimitive,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import { merge } from '@real-system/utils-library';

import { baseStyles } from './styles';
import type { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, ButtonPrimitiveStyleProps>;

const primaryStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand-contrast',
    backgroundColor: 'color-background-brand',
    _hover: {
      backgroundColor: 'color-background-brand-strong-2',
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
    color: 'color-text-danger-contrast',
    backgroundColor: 'color-background-danger-weak-05',
    _hover: {
      backgroundColor: 'color-background-danger-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-danger-strong-2',
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

const successStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-success-contrast',
    backgroundColor: 'color-background-success-weak-05',
    _hover: {
      backgroundColor: 'color-background-success-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-success-strong-2',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-success-weak-6',
    backgroundColor: 'color-background-success-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-success-weak-6',
    backgroundColor: 'color-background-success-weak-9',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral-contrast',
    backgroundColor: 'color-background-neutral-weak-1',
    _hover: {
      backgroundColor: 'color-background-neutral-strong-1',
    },
    _active: {
      backgroundColor: 'color-background-neutral-strong-2',
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
  neutral: neutralStyles,
  primary: primaryStyles,
  danger: dangerStyles,
  success: successStyles,
};

const PrimaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'primary', ...restProps },
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
