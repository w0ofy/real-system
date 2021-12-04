import React, { forwardRef } from 'react';

import { Text, TextStyleProps } from '@real-system/text';

import {
  HeadingAsTags,
  HeadingElement,
  HeadingVariants,
  InternalTypographyProps,
} from './types';

const styles: {
  [key in HeadingVariants]: Pick<
    TextStyleProps,
    'fontSize' | 'lineHeight' | 'mb' | 'fontWeight'
  >;
} = {
  heading1: {
    fontSize: 10,
    fontWeight: 3,
    lineHeight: 11,
    mb: 9,
  },
  heading2: {
    fontSize: 7,
    lineHeight: 10,
    fontWeight: 3,
    mb: 7,
  },
  heading3: {
    fontSize: 5,
    lineHeight: 9,
    fontWeight: 3,
    mb: 6,
  },
  heading4: {
    fontSize: 3,
    lineHeight: 8,
    fontWeight: 3,
    mb: 5,
  },
  heading5: {
    fontSize: 2,
    lineHeight: 7,
    fontWeight: 3,
    mb: 4,
  },
  heading6: {
    fontSize: 1,
    lineHeight: 6,
    fontWeight: 3,
    mb: 2,
  },
};

export type HeadingProps = {
  children?: React.ReactNode;
  variant?: HeadingVariants;
  as?: HeadingAsTags;
} & InternalTypographyProps;

const Heading = forwardRef<HeadingElement, HeadingProps>(
  (
    { variant = 'heading1', children, mb, as = 'div' },
    ref
  ): React.ReactElement => {
    return (
      <Text
        as={as}
        m={0}
        color="color-text"
        {...styles[variant]}
        ref={ref}
        mb={mb || styles[variant].mb}>
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
