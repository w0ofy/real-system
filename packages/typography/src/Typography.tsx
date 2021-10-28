import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { BoxAs, filterStyleProps } from '@realsystem/box';
import styled from '@realsystem/styling';

import { Heading } from './Heading';
import {
  InternalTypographyProps,
  TypographyAsTags,
  TypographyVariants,
} from './types';

const P = BoxAs('p');

type TypographyVariantMap = {
  [key in TypographyVariants]: keyof JSX.IntrinsicElements;
};

const TypographyApiVariants: TypographyVariantMap = {
  paragraph: 'p',
  inline: 'span',
};

export type TypographyComponentProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TypographyApiVariants;
  as?: TypographyAsTags;
} & InternalTypographyProps;

interface TypographyComponent
  extends ForwardRefExoticComponent<TypographyComponentProps> {
  Heading: (HeadingProps) => ReturnType<typeof Heading>;
}

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const TypographyApi: TypographyComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TypographyComponentProps
>(
  (
    { children, variant = 'paragraph', mb, as, ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <P
        fontSize={2}
        fontWeight={1}
        lineHeight={4}
        m={0}
        color="color-text"
        {...filterStyleProps(restProps)}
        as={as || TypographyApiVariants[variant]}
        mb={mb || 4}
        ref={ref}>
        {children}
      </P>
    );
  }
);

TypographyApi.displayName = 'Typography';
TypographyApi.Heading = Heading;

const Typography = styled(TypographyApi)<TypographyComponentProps>({});

export { Typography };
