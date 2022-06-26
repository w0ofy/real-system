import React, { forwardRef } from 'react';

import { ButtonPrimitive } from '@real-system/button-primitive';
import styled, { RealSystemComponentProps } from '@real-system/styled-library';

const StyledBaseButton = styled(ButtonPrimitive)({
  appearance: 'none',
  position: 'relative',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  border: 1,
  borderRadius: 4,
  color: 'gray-500',
  background: 'none',
  fontScale: 'button',
  fontFamily: 'body',
  fontWeight: 'button',
  textDecoration: 'none',
  transition:
    'background-color 200ms ease-out, box-shadow 200ms ease-in, border-color 200ms ease-in, color 200ms ease-out',
  margin: 0,
  cursor: 'pointer',
  _hover: {},
  _focus: { boxShadow: 'focus-outline', outline: 'none' },
  _active: { boxShadow: 'none' },
  _disabled: {},
});

const BaseButton = forwardRef<HTMLButtonElement, RealSystemComponentProps>(
  function BaseButton({ children, ...restProps }, ref) {
    return (
      <StyledBaseButton {...restProps} ref={ref}>
        {children}
      </StyledBaseButton>
    );
  }
);

export { BaseButton };
