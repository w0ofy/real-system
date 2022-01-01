import React, { forwardRef, useRef } from 'react';

import { useButton } from '@real-system/react-aria';
import styled, { StyledComponent } from '@real-system/styling';
import { _logger, makeTestId, useMergedRef } from '@real-system/utils';

import { composeButtonPrimitiveStyleProps } from './styleProps/props';
import { getPseudoButtonStyles } from './styleProps/pseudoPropStyles';
import { safelySpreadInternalProps } from './styleProps/safelySpreadInternalProps';
import type { ButtonPrimitiveProps, ButtonPrimitiveStyleProps } from './types';

const StyledButtonPrimitive = styled.button<ButtonPrimitiveStyleProps>(
  composeButtonPrimitiveStyleProps(),
  getPseudoButtonStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'color'
  >,
  ButtonPrimitiveStyleProps,
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
  function ButtonPrimitive(
    { as = 'button', children, disabled, ...restProps },
    ref
  ) {
    const internalRef = useRef<HTMLElement>(null);
    const mergedRef = useMergedRef<HTMLElement>(internalRef, ref);
    const { buttonProps } = useButton(
      {
        ...restProps,
        elementType: as,
        isDisabled: disabled,
      },
      mergedRef as React.MutableRefObject<HTMLElement>
    );

    if (restProps.onClick) {
      _logger.warn(
        'button-primitive',
        '`onClick` prop is deprecated. You can use this but we recommend using `onPress` to conform to cross-platform friendly events.'
      );
    }

    return (
      <StyledButtonPrimitive
        as={as}
        {...buttonPrimitiveStyles}
        {...safelySpreadInternalProps(restProps)}
        {...buttonProps}
        ref={mergedRef}>
        {children}
      </StyledButtonPrimitive>
    );
  }
);

ButtonPrimitive.defaultProps = {
  'data-testid': makeTestId<'button-primitive'>('button-primitive'),
};

export { ButtonPrimitive, buttonPrimitiveStyles };
