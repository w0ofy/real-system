import React, { forwardRef } from 'react';

import { useButton } from '@real-system/aria-button';
import styled, { StyledComponent } from '@real-system/styling';
import { _logger, makeTestId } from '@real-system/utils';

import { composeButtonPrimitiveStyleProps } from './styleProps/props';
import { getPseudoButtonStyles } from './styleProps/pseudoPropStyles';
import type { ButtonPrimitiveProps, ButtonPrimitiveStyleProps } from './types';

const StyledButtonPrimitive = styled.button<ButtonPrimitiveProps>(
  composeButtonPrimitiveStyleProps(),
  getPseudoButtonStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'color'
  >,
  ButtonPrimitiveProps,
  Record<string, unknown>
>;

const buttonPrimitiveStyles: ButtonPrimitiveStyleProps = {
  appearance: 'none',
  color: 'color-text',
  background: 'none',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  borderRadius: 2,
  transition:
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in, color 150ms ease-in-out',
  fontSize: 1,
  fontFamily: 'font-family-text',
  fontWeight: 1,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  _hover: {},
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
  _disabled: { cursor: 'not-allowed' },
};

const ButtonPrimitive = forwardRef<HTMLElement, ButtonPrimitiveProps>(
  function ButtonPrimitive<T = unknown>(
    { as = 'button', ...props }: ButtonPrimitiveProps & T,
    ref
  ) {
    const { buttonProps } = useButton(
      {
        ...props,
        elementType: as,
        isDisabled: props.disabled || props.isDisabled,
      },
      ref as React.RefObject<HTMLElement>
    );

    if (props.onClick) {
      _logger.warn(
        'button-primitive',
        '`onClick` is deprecated. You can use this but we recommend using `onPress`'
      );
    }

    return (
      <StyledButtonPrimitive
        as={as}
        {...buttonPrimitiveStyles}
        {...props}
        {...buttonProps}
        ref={ref}
      />
    );
  }
);

ButtonPrimitive.defaultProps = {
  'data-testid': makeTestId<'button-primitive'>('button-primitive'),
};

export { ButtonPrimitive, buttonPrimitiveStyles };
