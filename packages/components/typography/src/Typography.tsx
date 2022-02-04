import React, { forwardRef } from 'react';

import { TextPrimitive } from '@real-system/text-primitive';

import { Heading } from './Heading';
import { HelpText } from './HelpText';
import { Label } from './Label';
import {
  InternalTypographyProps,
  TypographyAsTags,
  TypographyVariants,
} from './types';

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
} & InternalTypographyProps;

export interface TypographyComponent
  extends React.ForwardRefExoticComponent<TypographyProps> {
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
    <TextPrimitive
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
    </TextPrimitive>
  );
});

Typography.Heading = Heading;
Typography.Label = Label;
Typography.HelpText = HelpText;

export { Typography };
