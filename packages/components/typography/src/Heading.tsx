import React, { forwardRef } from 'react';

import { TextPrimitive } from '@real-system/text-primitive';
import { useComponentTokens } from '@real-system/theme-library';

import {
  CommonTextProps,
  HeadingAsTags,
  HeadingElement,
  HeadingVariants,
} from './types';

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
  const { variants } = useComponentTokens<'heading'>('heading');
  const variantStyles = variants[variant]();
  return (
    <TextPrimitive as={tag || as} {...variantStyles} {...restProps} ref={ref}>
      {children}
    </TextPrimitive>
  );
});

export { Heading };
