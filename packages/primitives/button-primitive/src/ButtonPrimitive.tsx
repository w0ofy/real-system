import React, { forwardRef } from 'react';

import { AriakitButton } from '@real-system/ariakit-library';
import styled, {
  getPseudoProps,
  getStyleProps,
  isNotStyleProp,
  isPropValid,
} from '@real-system/styling-library';

import type { ButtonPrimitiveProps } from './types';

const StyledButtonPrimitive = styled(AriakitButton, {
  shouldForwardProp: (prop) => isPropValid(prop) && isNotStyleProp(prop),
})<any>(getStyleProps, getPseudoProps);

const baseStyles = {
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
  cursor: 'pointer',
  _hover: {},
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
  _disabled: {},
};

const ButtonPrimitive = forwardRef<HTMLButtonElement, ButtonPrimitiveProps>(
  function ButtonPrimitive({ children, ...restProps }, ref) {
    return (
      <StyledButtonPrimitive {...baseStyles} {...restProps} ref={ref}>
        {children}
      </StyledButtonPrimitive>
    );
  }
);

export { ButtonPrimitive };
