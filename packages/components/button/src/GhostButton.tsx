import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@real-system/box';
import { ButtonPrimitive } from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-brand-strong-3',
      backgroundColor: 'color-background-brand-weak-9',
    },
    _active: {
      color: 'color-text-brand-strong-6',
      backgroundColor: 'color-background-brand-weak-6',
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
    color: 'color-text-danger',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-danger-strong-3',
      backgroundColor: 'color-background-danger-weak-9',
    },
    _active: {
      color: 'color-text-danger-strong-6',
      backgroundColor: 'color-background-danger-weak-6',
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

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-neutral-strong-3',
      backgroundColor: 'color-background-neutral-weak-9',
    },
    _active: {
      color: 'color-text-neutral-strong-6',
      backgroundColor: 'color-background-neutral-weak-6',
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
  danger: dangerStyles,
  neutral: neutralStyles,
};

const GhostButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
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

GhostButton.displayName = 'GhostButton';

export { GhostButton };
