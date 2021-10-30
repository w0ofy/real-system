import React, { forwardRef } from 'react';

import { Box } from '@realsystem/box';
import styled from '@realsystem/styling';

import { GhostButton } from './GhostButton';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { sizeStyles } from './styles';
import { ButtonProps, ButtonStates, ButtonVariants } from './types';
import { InternalButtonProps } from './types';

const getButtonState = (
  disabled?: boolean,
  loading?: boolean
): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const BUTTON_VARIANTS: {
  [key in ButtonVariants]: React.FC<InternalButtonProps>;
} = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  ghost: GhostButton,
};

const ButtonApi = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      loading,
      variant = 'primary',
      size = 'default',
      leadingIcon,
      trailingIcon,
      ...restProps
    },
    ref
  ): React.ReactElement => {
    const buttonState = getButtonState(disabled, loading);
    // const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';
    const Button = BUTTON_VARIANTS[variant];

    return (
      <Button
        role="button"
        {...restProps}
        {...sizeStyles[size]}
        buttonState={buttonState}
        disabled={showDisabled}
        ref={ref}>
        {leadingIcon ? leadingIcon : null}
        <Box as="span" ml={leadingIcon ? 5 : 0} mr={trailingIcon ? 5 : 0}>
          {children}
        </Box>
        {trailingIcon ? trailingIcon : null}
      </Button>
    );
  }
);

ButtonApi.displayName = 'Button';

const Button = styled(ButtonApi)<ButtonProps>({});
export { Button };
