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

/**
 * @todo find a better way to merge base styles with Button component API styles i.e. _active style props; boxShadow
 */
const baseStyles = {
  appearance: 'none',
  color: 'gray-500',
  background: 'none',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  borderRadius: 4,
  transition:
    'background-color 150ms ease-out, box-shadow 150ms ease-in, color 150ms ease-out',
  fontSize: 1,
  fontFamily: 'body',
  fontWeight: 3,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  cursor: 'pointer',
  _hover: {},
  _focus: { boxShadow: 'focus-outline', outline: 'none' },
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
