import React, { forwardRef, useMemo } from 'react';

import { Spinner } from '@real-system/spinner';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { BaseButton } from './BaseButton';
import { buttonStylesConfig } from './Button.styles';
import { ButtonProps, ButtonStates } from './types';

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

type LabelProps = {
  marginLeft: number | string;
  marginRight: number | string;
};

const Label = styled('span')<LabelProps>((props) => ({
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  whiteSpace: 'nowrap',
}));

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
  const showDisabled = buttonState !== 'default';

  const buttonStyles = useMemo(
    () =>
      buttonStylesConfig[variant]({
        size,
        colorScheme,
        loading: isLoading,
      }),
    [variant, size, colorScheme, isLoading]
  );

  return (
    <BaseButton
      data-testid={makeTestId('button')}
      disabled={showDisabled}
      {...buttonStyles}
      {...restProps}
      ref={ref}>
      {leadingIcon ? leadingIcon : null}
      <Label
        marginLeft={getLabelMarginX(leadingIcon)}
        marginRight={getLabelMarginX(trailingIcon)}>
        {isLoading ? <Spinner size="sm" color="gray-300" /> : children}
      </Label>
      {trailingIcon ? trailingIcon : null}
    </BaseButton>
  );
});

export { Button };
export type { ButtonProps };
