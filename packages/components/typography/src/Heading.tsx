import React, { forwardRef } from 'react';

import { BaseText } from './BaseText';
import type { CommonTextProps, HeadingAsTags, HeadingElement } from './types';

const stylesConfig = {
  h1: {
    fontSize: 'h1',
    lineHeight: 'h1',
    fontWeight: 5,
    marginBottom: 5,
    color: 'gray-600',
  },
  h2: {
    fontSize: 'h2',
    lineHeight: 'h2',
    fontWeight: 5,
    marginBottom: 4,
    color: 'gray-600',
  },
  h3: {
    fontSize: 'h3',
    lineHeight: 'h3',
    fontWeight: 4,
    marginBottom: 3,
    color: 'gray-600',
  },
  h4: {
    fontSize: 'h4',
    lineHeight: 'h4',
    fontWeight: 4,
    marginBottom: 3,
    color: 'gray-600',
  },
  h5: {
    fontSize: 'h5',
    lineHeight: 'h5',
    fontWeight: 4,
    marginBottom: 2,
    color: 'gray-600',
  },
  h6: {
    fontSize: 'h6',
    lineHeight: 'h6',
    fontWeight: 4,
    marginBottom: 1,
    color: 'gray-600',
  },
};

type HeadingProps = {
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

export type { HeadingProps };
export { Heading };
