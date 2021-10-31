import React, { forwardRef } from 'react';

import { BoxProps, BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles, BoxAsButton } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-primary-strong',
    backgroundColor: 'color-background',
    borderColor: 'color-border-primary-strong',
    _hover: {
      color: 'color-text-primary-stronger',
      backgroundColor: 'color-background-primary-weakest',
      borderColor: 'color-border-primary-stronger',
    },
    _active: {
      color: 'color-text-primary-strongest',
      backgroundColor: 'color-background-primary-weaker',
      borderColor: 'color-border-primary-strongest',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-primary-weaker',
    backgroundColor: 'color-background-primary-weakest',
    borderColor: 'color-border-primary-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-primary-weaker',
    backgroundColor: 'color-background-primary-weakest',
    borderColor: 'color-border-primary-weakest',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger',
    backgroundColor: 'color-background',
    borderColor: 'color-border-danger',
    _hover: {
      color: 'color-text-danger-stronger',
      backgroundColor: 'color-background-danger-weakest',
      borderColor: 'color-border-danger-stronger',
    },
    _active: {
      color: 'color-text-danger-strongest',
      backgroundColor: 'color-background-danger-weaker',
      borderColor: 'color-border-danger-strongest',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
    borderColor: 'color-border-danger-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
    borderColor: 'color-border-danger-weakest',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'color-background',
    borderColor: 'color-border-neutral',
    _hover: {
      color: 'color-text-neutral-stronger',
      backgroundColor: 'color-background-neutral-weakest',
      borderColor: 'color-border-neutral-stronger',
    },
    _active: {
      color: 'color-text-neutral-strongest',
      backgroundColor: 'color-background-neutral-weaker',
      borderColor: 'color-border-neutral-strongest',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
    borderColor: 'color-border-neutral-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
    borderColor: 'color-border-neutral-weakest',
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
      <BoxAsButton {...STYLE_MAP[intent][buttonState]} {...restProps} ref={ref}>
        {children}
      </BoxAsButton>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };
