import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { BoxAs } from '@realsystem/box';
import styled, { DefaultTheme, StyledComponent } from '@realsystem/styling';

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

export type TypographyProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TypographyApiVariants;
} & InternalTypographyProps;

interface TypographyComponent
  extends ForwardRefExoticComponent<TypographyProps> {
  Heading: (HeadingProps) => ReturnType<typeof Heading>;
}

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const TypographyApi: TypographyComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TypographyProps
>(({ children, variant = 'p', mb }, ref): React.ReactElement => {
  return (
    <P
      as={TypographyApiVariants[variant]}
      fontSize={2}
      fontWeight={1}
      lineHeight={4}
      m={0}
      mb={mb || 4}
      color="color-text"
      ref={ref}>
      {children}
    </P>
  );
});

TypographyApi.displayName = 'Typography';
TypographyApi.Heading = Heading;

const Typography = styled(TypographyApi)<TypographyProps>({});

export { Typography };
