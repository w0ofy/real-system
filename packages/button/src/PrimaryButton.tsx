import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles, BoxAsButton } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-inverse',
    backgroundColor: 'color-background-brand',
    _hover: {
      backgroundColor: 'color-background-brand-strong',
    },
    _active: {
      backgroundColor: 'color-background-brand-stronger',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    backgroundColor: 'color-background-danger',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-danger-strong',
    },
    _active: {
      backgroundColor: 'color-background-danger-stronger',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    backgroundColor: 'color-background-neutral',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-neutral-strong',
    },
    _active: {
      backgroundColor: 'color-background-neutral-stronger',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: defaultStyles,
  danger: dangerStyles,
  neutral: neutralStyles,
};

const PrimaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'default', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <BoxAsButton {...STYLE_MAP[intent][buttonState]} {...restProps} ref={ref}>
        {children}
      </BoxAsButton>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
