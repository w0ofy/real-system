import React from 'react';

import { BoxAs } from '@realsystem/box';
import styled from '@realsystem/styling';

import { Heading } from './Heading';
import { InternalTypographyProps, TypographyVariants } from './types';

const P = BoxAs('p');

type TypographyVariantMap = {
  [key in TypographyVariants]: keyof JSX.IntrinsicElements;
};

const TypographyApiVariants: TypographyVariantMap = {
  p: 'p',
  inline: 'span',
};

type TypographyProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TypographyApiVariants;
} & InternalTypographyProps;

const TypographyApi: TypographyComponent = ({
  children,
  variant = 'p',
  mb,
}: TypographyProps): React.ReactElement => {
  return (
    <P
      as={TypographyApiVariants[variant]}
      fontSize={2}
      fontWeight={1}
      lineHeight={4}
      m={0}
      mb={mb || 4}
      color="color-text">
      {children}
    </P>
  );
};

TypographyApi.Heading = Heading;

export type TypographyComponent = {
  (TypographyProps): React.ReactElement;
  Heading: (HeadingProps) => ReturnType<typeof Heading>;
};

const Typography = styled(TypographyApi)<TypographyProps>({});

export { Typography };
