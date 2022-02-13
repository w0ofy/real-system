import React, { forwardRef } from 'react';

import { Button as AriaButton } from '@real-system/ariakit-library';
import styled, { isPropValid } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { BUTTON_PRIMITIVE_STYLE_PROPS_MAP } from './styleProps/constants';
import { composeButtonPrimitiveStyleProps } from './styleProps/props';
import { getPseudoButtonStyles } from './styleProps/pseudoPropStyles';
import type { ButtonPrimitiveProps, ButtonPrimitiveStyleProps } from './types';

const StyledButtonPrimitive = styled(AriaButton, {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !BUTTON_PRIMITIVE_STYLE_PROPS_MAP[prop],
})<ButtonPrimitiveProps>(
  composeButtonPrimitiveStyleProps(),
  getPseudoButtonStyles
);

console.log(BUTTON_PRIMITIVE_STYLE_PROPS_MAP);
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

const ButtonPrimitive = forwardRef<HTMLButtonElement, ButtonPrimitiveProps>(
  function ButtonPrimitive({ children, ...restProps }, ref) {
    return (
      <StyledButtonPrimitive
        {...buttonPrimitiveStyles}
        {...restProps}
        ref={ref}>
        {children}
      </StyledButtonPrimitive>
    );
  }
);

ButtonPrimitive.defaultProps = {
  'data-testid': makeTestId<'button-primitive'>('button-primitive'),
};

export { ButtonPrimitive, buttonPrimitiveStyles };
