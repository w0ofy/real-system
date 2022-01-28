import React, { forwardRef } from 'react';

import {
  ButtonPrimitive,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import { merge } from '@real-system/utils-library';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, ButtonPrimitiveStyleProps>;

const primaryStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-brand-strong-4',
    },
    _active: {
      color: 'color-text-brand-strong-6',
    },
  }),
  loading: merge(baseStyles.disabled, {
    color: 'color-text-brand-weak-6',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weak-6',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger-weak-05',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-danger-strong-3',
    },
    _active: {
      color: 'color-text-danger-strong-5',
    },
  }),
  loading: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
  }),
};

const successStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-success-weak-05',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-success-strong-3',
    },
    _active: {
      color: 'color-text-success-strong-5',
    },
  }),
  loading: merge(baseStyles.disabled, {
    color: 'color-text-success-weak-6',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-success-weak-6',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral-weak-05',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-neutral-strong-3',
    },
    _active: {
      color: 'color-text-neutral-strong-5',
    },
  }),
  loading: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weak-6',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weak-6',
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

const FloatingButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  function FloatingButton(
    { children, intent = 'neutral', buttonState, ...restProps },
    ref
  ): React.ReactElement {
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

export { FloatingButton };
