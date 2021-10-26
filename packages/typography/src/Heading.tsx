import React from 'react';

import { BoxAs, BoxStyleProps } from '@realsystem/box';
import styled from '@realsystem/styling';

import {
  HeadingAsTags,
  HeadingVariants,
  InternalTypographyProps,
} from './types';

const Div = BoxAs('div');

const styles: {
  [key in HeadingVariants]: Pick<
    BoxStyleProps,
    'fontSize' | 'lineHeight' | 'mb' | 'fontWeight'
  >;
} = {
  heading1: {
    fontSize: 8,
    fontWeight: 4,
    lineHeight: 11,
    mb: 9,
  },
  heading2: {
    fontSize: 6,
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

const HeadingApi = ({
  variant = 'heading1',
  children,
  mb,
  as = 'div',
}: HeadingProps): React.ReactElement => {
  return (
    <Div as={as} m={0} {...styles[variant]} mb={mb || styles[variant].mb}>
      {children}
    </Div>
  );
};

const Heading = styled(HeadingApi)<HeadingProps>({});

export { Heading };
