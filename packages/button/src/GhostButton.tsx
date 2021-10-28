import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles, BoxAsButton } from './styles';
import { ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'color-background-weak',
    _hover: {
      color: 'color-text-brand-strong',
      backgroundColor: 'color-background-brand-weakest',
    },
    _active: {
      color: 'color-text-brand-strong',
      backgroundColor: 'color-background-brand-weakest',
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

const GhostButton = forwardRef<
  HTMLButtonElement,
  Omit<InternalButtonProps, 'intent'>
>(({ children, buttonState, ...restProps }, ref): React.ReactElement => {
  return (
    <BoxAsButton {...defaultStyles[buttonState]} {...restProps} ref={ref}>
      {children}
    </BoxAsButton>
  );
});

GhostButton.displayName = 'GhostButton';

export { GhostButton };
