import React, { forwardRef } from 'react';

import { Box, BoxStyleProps } from '@real-system/box';

import {
  HeadingAsTags,
  HeadingElement,
  HeadingVariants,
  InternalTypographyProps,
} from './types';

const styles: {
  [key in HeadingVariants]: Pick<
    BoxStyleProps,
    'fontSize' | 'lineHeight' | 'mb' | 'fontWeight' | 'color'
  >;
} = {
  heading1: {
    fontSize: 10,
    fontWeight: 4,
    lineHeight: 11,
    mb: 9,
  },
  heading2: {
    fontSize: 7,
    lineHeight: 10,
    fontWeight: 4,
    mb: 7,
  },
  heading3: {
    fontSize: 5,
    lineHeight: 9,
    fontWeight: 4,
    mb: 6,
  },
  heading4: {
    fontSize: 3,
    fontWeight: 4,
    mb: 5,
  },
  heading5: {
    fontSize: 2,
    fontWeight: 4,
    mb: 4,
  },
  heading6: {
    fontSize: 1,
    fontWeight: 4,
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
      <Box
        as={as}
        m={0}
        color="color-text"
        {...styles[variant]}
        ref={ref}
        mb={mb || styles[variant].mb}>
        {children}
      </Box>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
