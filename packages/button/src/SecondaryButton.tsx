import React, { forwardRef } from 'react';

import { BoxAs, BoxProps, BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const buttonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-alt',
    backgroundColor: 'color-background-brand-inverse',
    borderColor: 'color-border-alt',
    _hover: {
      color: 'color-text',
      backgroundColor: 'color-background',
      borderColor: 'color-border-brand-strong',
    },
    _active: {
      backgroundColor: 'color-background',
      borderColor: 'color-border-brand-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
    borderColor: 'color-border-brand-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
    borderColor: 'color-border-brand-muted',
  }),
};

const successButtonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-success',
    backgroundColor: 'color-background-success-inverse',
    borderColor: 'color-border-success',
    _hover: {
      color: 'color-text-success-strong',
      backgroundColor: 'color-background-success-weak',
      borderColor: 'color-border-success-strong',
    },
    _active: {
      color: 'color-text-success-strong',
      backgroundColor: 'color-background-success-weak',
      borderColor: 'color-border-success-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
    borderColor: 'color-border-success-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
    borderColor: 'color-border-success-muted',
  }),
};

const dangerButtonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger',
    backgroundColor: 'color-background-danger-inverse',
    borderColor: 'color-border-danger',
    _hover: {
      color: 'color-text-danger-strong',
      backgroundColor: 'color-background-danger-weakest',
      borderColor: 'color-border-danger-strong',
    },
    _active: {
      color: 'color-text-danger-strong',
      backgroundColor: 'color-background-danger-weakest',
      borderColor: 'color-border-danger-strong',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
    borderColor: 'color-border-danger-muted',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
    borderColor: 'color-border-danger-muted',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: buttonStyles,
  success: successButtonStyles,
  danger: dangerButtonStyles,
};

export type ButtonProps = Partial<BoxProps> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonState: ButtonStates;
};

const Primitive = BoxAs('button');

const SecondaryButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'default', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <Primitive {...STYLE_MAP[intent][buttonState]} {...restProps} ref={ref}>
        {children}
      </Primitive>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };
