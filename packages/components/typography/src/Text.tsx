import React, { forwardRef } from 'react';

import { TextPrimitive } from '@real-system/text-primitive';

import { Heading } from './Heading';
import { HelpText } from './HelpText';
import { Label } from './Label';
import { CommonTextProps, TextAsTags } from './types';

export type TextProps = {
  children?: React.ReactNode;
  inline?: boolean;
  as?: TextAsTags;
} & CommonTextProps;

export interface TextComponent
  extends React.ForwardRefExoticComponent<TextProps> {
  Heading: typeof Heading;
  Label: typeof Label;
  HelpText: typeof HelpText;
}

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const Text: TextComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TextProps
>(function Text(
  { children, as, inline = false, ...restProps },
  ref
): React.ReactElement {
  return (
    <TextPrimitive
      lineHeight={2}
      marginBottom={2}
      {...restProps}
      as={as || inline ? 'span' : 'p'}
      ref={ref}>
      {children}
    </TextPrimitive>
  );
});

Text.Heading = Heading;
Text.Label = Label;
Text.HelpText = HelpText;

export { Text };
