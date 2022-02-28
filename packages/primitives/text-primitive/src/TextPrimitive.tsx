import React, { forwardRef } from 'react';

import styled, {
  getPseudoStyleProps,
  getStyleProps,
} from '@real-system/styling-library';
import { useComponentTokens } from '@real-system/theme-library';

import type { TextPrimitiveProps } from './types';

const StyledText = styled.div<any>(getStyleProps, getPseudoStyleProps);

const TextPrimitive = forwardRef<HTMLElement, TextPrimitiveProps>(function Text(
  { children, ...restProps },
  ref
) {
  const { baseStyles } = useComponentTokens<'text'>('text');
  return (
    <StyledText ref={ref} {...baseStyles} {...restProps}>
      {children}
    </StyledText>
  );
});

export { TextPrimitive };
