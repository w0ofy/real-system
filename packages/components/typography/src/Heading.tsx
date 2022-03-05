import React, { forwardRef } from 'react';

import { TextPrimitive } from '@real-system/text-primitive';

import {
  CommonTextProps,
  HeadingAsTags,
  HeadingElement,
  HeadingVariants,
} from './types';

const variants = {
  heading1: {
    fontSize: 7,
    lineHeight: 7,
    fontWeight: 3,
    marginBottom: 5,
    color: 'color-text-neutral-strong-3',
  },
  heading2: {
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 3,
    marginBottom: 4,
    color: 'color-text-neutral-strong-3',
  },
  heading3: {
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 2,
    marginBottom: 3,
    color: 'color-text-neutral-strong-3',
  },
  heading4: {
    fontSize: 3,
    lineHeight: 3,
    fontWeight: 2,
    marginBottom: 3,
    color: 'color-text-neutral-strong-3',
  },
  heading5: {
    fontSize: 2,
    lineHeight: 2,
    fontWeight: 2,
    marginBottom: 2,
    color: 'color-text-neutral-strong-3',
  },
  heading6: {
    fontSize: 1,
    lineHeight: 1,
    fontWeight: 2,
    marginBottom: 1,
    color: 'color-text-neutral-strong-3',
  },
};

/** @todo map variant to html tags */
export type HeadingProps = {
  children?: React.ReactNode;
  variant?: HeadingVariants;
  as?: HeadingAsTags;
  tag?: HeadingAsTags;
} & CommonTextProps;

const Heading = forwardRef<HeadingElement, HeadingProps>(function Heading(
  { variant = 'heading2', children, as = 'div', tag, ...restProps },
  ref
) {
  const variantStyles = variants[variant];
  return (
    <TextPrimitive as={tag || as} {...variantStyles} {...restProps} ref={ref}>
      {children}
    </TextPrimitive>
  );
});

export { Heading };
