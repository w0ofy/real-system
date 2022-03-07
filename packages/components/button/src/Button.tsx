import React, { forwardRef, useMemo } from 'react';

import { ButtonPrimitive } from '@real-system/button-primitive';
import { Spinner } from '@real-system/spinner';
import styled from '@real-system/styling-library';
import { patchScale } from '@real-system/theme-library';
import { makeTestId } from '@real-system/utils-library';

import { makeButtonStylesFromVariant } from './Button.styles';
import { ButtonIntent, ButtonProps, ButtonStates } from './types';

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

const Label = styled.span<LabelProps>((props) => ({
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  whiteSpace: 'nowrap',
}));

const getLabelMarginX = (hasIcon: unknown) => (hasIcon ? patchScale(5) : 0);

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
    intent: intentProp = undefined,
    ...restProps
  },
  ref
): React.ReactElement {
  const intent: ButtonIntent = useMemo(() => {
    if (intentProp === undefined) {
      if (variant === 'primary') return 'primary';
      return 'neutral';
    }
    return intentProp;
  }, [intentProp, variant]);
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
      makeButtonStylesFromVariant[variant]({
        size,
        intent,
        loading: isLoading,
      }),
    [intent, isLoading, size, variant]
  );

  return (
    <ButtonPrimitive
      data-testid={makeTestId('button')}
      disabled={showDisabled}
      {...buttonStyles}
      {...restProps}
      ref={ref}>
      {leadingIcon ? leadingIcon : null}
      <Label
        marginLeft={getLabelMarginX(leadingIcon)}
        marginRight={getLabelMarginX(trailingIcon)}>
        {isLoading ? (
          <Spinner size="sm" color="color-text-neutral-weak-3" />
        ) : (
          children
        )}
      </Label>
      {trailingIcon ? trailingIcon : null}
    </ButtonPrimitive>
  );
});

export { Button };
export type { ButtonProps };
