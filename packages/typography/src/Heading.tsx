import React from 'react';

import { BoxAs, BoxStyleProps } from '@realsystem/box';
import styled from '@realsystem/styling';

import { HeadingVariants, InternalTypographyProps } from './types';

const H1 = BoxAs('h1');

type HeadingVariantMap = {
  [key in HeadingVariants]: keyof JSX.IntrinsicElements;
};

const VariantMap: HeadingVariantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

const styles: { [key in HeadingVariants]: BoxStyleProps } = {
  h1: {
    fontSize: 8,
  },
  h2: {
    fontSize: 6,
  },
  h3: {
    fontSize: 5,
  },
  h4: {
    fontSize: 3,
  },
};

export type HeadingProps = {
  children?: React.ReactNode;
  variant?: HeadingVariants;
} & InternalTypographyProps;

const HeadingApi = ({
  variant = 'h1',
  children,
}: HeadingProps): React.ReactElement => {
  return (
    <H1 as={VariantMap[variant]} {...styles[variant]}>
      {children}
    </H1>
  );
};

const Heading = styled(HeadingApi)<HeadingProps>({});

export { Heading };
