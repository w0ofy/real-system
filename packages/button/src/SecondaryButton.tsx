import React, { forwardRef } from 'react';

import { BoxAs, BoxProps, BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const buttonStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand-strong',
    backgroundColor: 'color-background-brand-inverse',
    borderColor: 'color-border-brand-strong',
    _hover: {
      color: 'color-text-brand-stronger',
      backgroundColor: 'color-background-brand-weakest',
      borderColor: 'color-border-brand-stronger',
    },
    _active: {
      color: 'color-text-brand-stronger',
      backgroundColor: 'color-background-brand-weakest',
      borderColor: 'color-border-brand-stronger',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
    borderColor: 'color-border-brand-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
    borderColor: 'color-border-brand-weakest',
  }),
};

const dangerButtonStyles: ButtonStyles = {
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
      color: 'color-text-danger-stronger',
      backgroundColor: 'color-background-danger-weakest',
      borderColor: 'color-border-danger-stronger',
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

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: buttonStyles,
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
