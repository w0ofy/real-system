import React, { forwardRef } from 'react';

import {
  ButtonPrimitive,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

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
    color: 'color-text-danger',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-danger-strong-4',
    },
    _active: {
      color: 'color-text-danger-strong-6',
    },
  }),
  loading: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
  }),
};

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'none',
    _hover: {
      color: 'color-text-neutral-strong-4',
    },
    _active: {
      color: 'color-text-neutral-strong-6',
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
  default: defaultStyles,
  primary: primaryStyles,
  danger: dangerStyles,
};

const FloatingButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  function FloatingButton(
    { children, intent = 'default', buttonState, ...restProps },
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
