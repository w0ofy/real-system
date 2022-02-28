import React, { forwardRef } from 'react';

import { AriakitButton } from '@real-system/ariakit-library';
import styled, {
  getPseudoStyleProps,
  getStyleProps,
  isNotStyleProp,
  isPropValid,
} from '@real-system/styling-library';
import { useComponentTokens } from '@real-system/theme-library';

import type { ButtonPrimitiveProps } from './types';

const StyledButtonPrimitive = styled(AriakitButton, {
  shouldForwardProp: (prop) => isPropValid(prop) && isNotStyleProp(prop),
})<any>(getStyleProps, getPseudoStyleProps);

const ButtonPrimitive = forwardRef<HTMLButtonElement, ButtonPrimitiveProps>(
  function ButtonPrimitive({ children, ...restProps }, ref) {
    const { baseStyles } = useComponentTokens('button');
    return (
      <StyledButtonPrimitive {...baseStyles} {...restProps} ref={ref}>
        {children}
      </StyledButtonPrimitive>
    );
  }
);

export { ButtonPrimitive };
