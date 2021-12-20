import React, { forwardRef } from 'react';

import styled, { StyledComponent } from '@real-system/styling';

import { getPseudoStyles } from './styleFunction';
import { composeTextStyleProps } from './styleProps';
import type { TextProps } from './types';

const StyledText = styled.div(
  composeTextStyleProps(),
  getPseudoStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'color'
  >,
  TextProps,
  Record<string, unknown>
>;

const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    children,
    color = 'color-text',
    fontSize = 1,
    fontWeight = 0,
    lineHeight = 4,
    m = 0,
    ...restProps
  },
  ref
) {
  return (
    <StyledText
      ref={ref}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      m={m}
      {...restProps}>
      {children}
    </StyledText>
  );
});

export { Text };
