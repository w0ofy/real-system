import React, { forwardRef } from 'react';

import type { ColorSchemes, StylishProps } from '@real-system/styled-library';

import { BaseText } from './BaseText';
import type { CommonTextProps } from './Text.model';

type CodeProps = {
  children?: React.ReactNode;
  colorScheme?: ColorSchemes;
} & CommonTextProps;

const Code = forwardRef<HTMLElement, CodeProps>(function Heading(
  { children, colorScheme, ...restProps },
  ref
) {
  const colorStyles: StylishProps = {
    bgColor: `${colorScheme}-100`,
    color: `${colorScheme}-700`,
  };
  return (
    <BaseText
      as="code"
      {...colorStyles}
      letterSpacing="code"
      fontFamily="code"
      pInline={2}
      wordWrap="break-word"
      borderRadius={3}
      {...restProps}
      ref={ref}>
      {children}
    </BaseText>
  );
});

export type { CodeProps };
export { Code };
