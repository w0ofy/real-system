import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { BoxAs } from '@real-system/box';

import { Heading } from './Heading';
import { HelpText } from './HelpText';
import { Label } from './Label';
import {
  InternalTypographyProps,
  TypographyAsTags,
  TypographyVariants,
} from './types';

const P = BoxAs<TypographyProps>('p');

type TypographyVariantMap = {
  [key in TypographyVariants]: Extract<TypographyAsTags, 'p' | 'span'>;
};

const TYPOGRAPHY_VARIANT_MAP: TypographyVariantMap = {
  paragraph: 'p',
  inline: 'span',
};

export type TypographyProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TYPOGRAPHY_VARIANT_MAP;
  as?: TypographyAsTags;
} & Pick<InternalTypographyProps, 'mb' | 'marginBottom'>;

export interface TypographyComponent
  extends ForwardRefExoticComponent<TypographyProps> {
  Heading: typeof Heading;
  Label: typeof Label;
  HelpText: typeof HelpText;
}

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const Typography: TypographyComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TypographyProps
>(function Typography(
  { children, variant = 'paragraph', mb, marginBottom, as, ...restProps },
  ref
): React.ReactElement {
  return (
    <P
      fontSize={1}
      fontWeight={0}
      lineHeight={2}
      m={0}
      color="color-text"
      {...restProps}
      as={as || TYPOGRAPHY_VARIANT_MAP[variant]}
      mb={(marginBottom || mb) ?? 2}
      ref={ref}>
      {children}
    </P>
  );
});

Typography.Heading = Heading;
Typography.Label = Label;
Typography.HelpText = HelpText;

export { Typography };
