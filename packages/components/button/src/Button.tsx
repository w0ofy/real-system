import React, { forwardRef, useMemo } from 'react';

import { real } from '@real-system/elements-primitive';
import { Spinner } from '@real-system/spinner';
import { makeTestId } from '@real-system/utils-library';

import { BaseButton } from './BaseButton';
import { ButtonProps, ButtonStates } from './Button.model';
import { buttonStylesConfig } from './Button.styles';

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

const getLabelMarginX = (hasIcon: unknown) => (hasIcon ? 5 : 0);

/**
 * @todo update sizes API with more variations
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    disabled,
    loading,
    variant = 'outline',
    size = 'md',
    leadingIcon,
    trailingIcon,
    colorScheme = 'gray',
    ...restProps
  },
  ref
): React.ReactElement {
  const buttonState = useMemo(
    () => getButtonState(disabled, loading),
    [disabled, loading]
  );
  const isLoading = useMemo(
    () => buttonState === 'loading' && variant !== 'floating',
    [buttonState, variant]
  );
  const buttonStyles = useMemo(
    () =>
      buttonStylesConfig[variant]({
        size,
        colorScheme,
        loading: isLoading,
      }),
    [variant, size, colorScheme, isLoading]
  );

  const isLoadingOrDisabled = buttonState !== 'default';

  return (
    <BaseButton
      data-testid={makeTestId('button')}
      disabled={isLoadingOrDisabled}
      {...buttonStyles}
      {...restProps}
      ref={ref}>
      {leadingIcon ? leadingIcon : null}
      <real.span
        whiteSpace="nowrap"
        marginLeft={getLabelMarginX(leadingIcon)}
        marginRight={getLabelMarginX(trailingIcon)}>
        {isLoading ? <Spinner size="sm" color="gray-300" /> : children}
      </real.span>
      {trailingIcon ? trailingIcon : null}
    </BaseButton>
  );
});

export { Button };
export type { ButtonProps };
