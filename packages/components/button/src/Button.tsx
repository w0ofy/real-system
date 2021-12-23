import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';
import { Spinner } from '@real-system/spinner';

import { DefaultButton } from './DefaultButton';
import { FloatingButton } from './FloatingButton';
import { MinimalButton } from './MinimalButton';
import { PrimaryButton } from './PrimaryButton';
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
  default: DefaultButton,
  primary: PrimaryButton,
  minimal: MinimalButton,
  floating: FloatingButton,
};

/**
 * @todo update sizes API with more variations
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    disabled,
    loading,
    variant = 'default',
    size = 'md',
    leadingIcon,
    trailingIcon,
    ...restProps
  },
  ref
): React.ReactElement {
  const buttonState = useMemo(
    () => getButtonState(disabled, loading),
    [disabled, loading]
  );
  const sizeStyles = useMemo(
    () => getSizeStyles(variant)[size],
    [variant, size]
  );
  const showLoading = useMemo(
    () => buttonState === 'loading' && variant !== 'floating',
    [buttonState, variant]
  );
  const showDisabled = buttonState !== 'default';
  const ButtonVariant = BUTTON_VARIANTS[variant];
  return (
    <ButtonVariant
      {...restProps}
      {...sizeStyles}
      loading={showLoading}
      buttonState={buttonState}
      disabled={showDisabled}
      ref={ref}>
      {leadingIcon ? leadingIcon : null}
      <Box as="span" ml={leadingIcon ? 5 : 0} mr={trailingIcon ? 5 : 0}>
        {showLoading ? (
          <Spinner size="sm" color="color-text-neutral-weak-3" />
        ) : (
          children
        )}
      </Box>
      {trailingIcon ? trailingIcon : null}
    </ButtonVariant>
  );
});

export { Button };
export type { ButtonProps };
