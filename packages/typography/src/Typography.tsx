import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { BoxAs } from '@real-system/box';

import { Heading } from './Heading';
import {
  InternalTypographyProps,
  TypographyAsTags,
  TypographyElement,
  TypographyVariants,
} from './types';

const P = BoxAs('p');

type TypographyVariantMap = {
  [key in TypographyVariants]: keyof JSX.IntrinsicElements;
};

const TYPOGRAPHY_VARIANT_MAP: TypographyVariantMap = {
  paragraph: 'p',
  inline: 'span',
};

/**
 * Named `TypographyComponentProps` instead of `TypographyProps` because:
 * Module '@real-system/styling' has already exported a member named 'TypographyProps'
 */
export type TypographyComponentProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TYPOGRAPHY_VARIANT_MAP;
  as?: TypographyAsTags;
} & InternalTypographyProps;

export interface TypographyComponent
  extends ForwardRefExoticComponent<TypographyComponentProps> {
  Heading: (HeadingProps) => ReturnType<typeof Heading>;
}

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const Typography: TypographyComponent = forwardRef<
  TypographyElement,
  TypographyComponentProps
>(
  (
    { children, variant = 'paragraph', mb, as, ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <P
        fontSize={2}
        fontWeight={0}
        lineHeight={4}
        m={0}
        color="color-text"
        {...restProps}
        as={as || TYPOGRAPHY_VARIANT_MAP[variant]}
        mb={mb || 4}
        ref={ref}>
        {children}
      </P>
    );
  }
);

Typography.displayName = 'Typography';
Typography.Heading = Heading;

export { Typography };
