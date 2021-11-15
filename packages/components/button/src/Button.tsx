import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';

import { GhostButton } from './GhostButton';
import { LinkButton } from './LinkButton';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { getSizeStyles } from './styles';
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
  link: LinkButton,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
    const buttonState = useMemo(
      () => getButtonState(disabled, loading),
      [disabled, loading]
    );
    const sizeStyles = useMemo(
      () => getSizeStyles(variant)[size],
      [variant, size]
    );
    // const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';
    const Button = BUTTON_VARIANTS[variant];
    return (
      <Button
        role="button"
        {...restProps}
        {...sizeStyles}
        buttonState={buttonState}
        disabled={showDisabled}
        ref={ref}>
        {leadingIcon ? leadingIcon : null}
        <Box
          as="span"
          lineHeight={3}
          ml={leadingIcon ? 5 : 0}
          mr={trailingIcon ? 5 : 0}>
          {children}
        </Box>
        {trailingIcon ? trailingIcon : null}
      </Button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };