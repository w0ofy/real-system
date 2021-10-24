import React, { forwardRef } from 'react';

import { BoxAs, BoxProps, BoxStyleProps } from '@realsystem/box';
import styled from '@realsystem/styling';
import { merge } from '@realsystem/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand-inverse',
    backgroundColor: 'color-background-brand',
    _hover: {
      backgroundColor: 'color-background-brand-strong',
    },
    _active: {
      backgroundColor: 'color-background-brand-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
  }),
};

const successButtonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    backgroundColor: 'color-background-success',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-success-strong',
    },
    _active: {
      backgroundColor: 'color-background-success-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
  }),
};

const dangerButtonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    backgroundColor: 'color-background-danger',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-danger-strong',
    },
    _active: {
      backgroundColor: 'color-background-danger-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: defaultStyles,
  success: successButtonStyles,
  danger: dangerButtonStyles,
};

const BoxAsButton = BoxAs('button');

const PrimaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'default', ...otherProps },
    ref
  ): React.ReactElement => {
    return (
      <BoxAsButton
        {...STYLE_MAP[intent][buttonState]}
        {...otherProps}
        ref={ref}>
        {children}
      </BoxAsButton>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
