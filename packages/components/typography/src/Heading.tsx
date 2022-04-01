import React, { forwardRef } from 'react';

import { BaseText } from './BaseText';
import type { CommonTextProps, HeadingAsTags, HeadingElement } from './types';

const stylesConfig = {
  h1: {
    fontSize: 7,
    lineHeight: 7,
    fontWeight: 5,
    marginBottom: 5,
    color: 'gray-600',
  },
  h2: {
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 5,
    marginBottom: 4,
    color: 'gray-600',
  },
  h3: {
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 4,
    marginBottom: 3,
    color: 'gray-600',
  },
  h4: {
    fontSize: 3,
    lineHeight: 3,
    fontWeight: 4,
    marginBottom: 3,
    color: 'gray-600',
  },
  h5: {
    fontSize: 2,
    lineHeight: 2,
    fontWeight: 4,
    marginBottom: 2,
    color: 'gray-600',
  },
  h6: {
    fontSize: 1,
    lineHeight: 1,
    fontWeight: 4,
    marginBottom: 1,
    color: 'gray-600',
  },
};

export type HeadingProps = {
  children?: React.ReactNode;
  as?: HeadingAsTags;
  size?: HeadingAsTags;
} & CommonTextProps;

const Heading = forwardRef<HeadingElement, HeadingProps>(function Heading(
  { children, as = 'h2', size, ...restProps },
  ref
) {
  const headingStyles = stylesConfig[size || as];

  return (
    <BaseText
      as={as}
      {...headingStyles}
      letterSpacing="heading"
      fontFamily="heading"
      {...restProps}
      ref={ref}>
      {children}
    </BaseText>
  );
});

export { Heading };
