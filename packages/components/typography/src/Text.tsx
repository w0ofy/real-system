import React, { forwardRef } from 'react';

import { BaseText } from './BaseText';
import { Code } from './Code';
import { Heading } from './Heading';
import { HelperText } from './HelperText';
import { Label } from './Label';
import type { CommonTextProps } from './Text.model';
import { Truncate } from './Truncate';

type TextAsTags = Extract<
  keyof JSX.IntrinsicElements,
  'p' | 'span' | 'div' | 'label'
>;

export type TextProps = {
  children?: React.ReactNode;
  inline?: boolean;
  as?: TextAsTags;
} & CommonTextProps;

export interface TextComponent
  extends React.ForwardRefExoticComponent<TextProps> {
  Base: typeof BaseText;
  Code: typeof Code;
  Heading: typeof Heading;
  HelperText: typeof HelperText;
  Label: typeof Label;
  Truncate: typeof Truncate;
}

/**
 * Typography component for real system
 */
// @ts-expect-error Text component properties are defined on the fn object after this is defined
const Text: TextComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TextProps
>(function Text(
  { children, as, inline = false, ...restProps },
  ref
): React.ReactElement {
  return (
    <BaseText
      lineHeight={2}
      marginBottom={2}
      {...restProps}
      as={as || inline ? 'span' : 'p'}
      ref={ref}>
      {children}
    </BaseText>
  );
});

Text.Base = BaseText;
Text.Code = Code;
Text.Heading = Heading;
Text.HelperText = HelperText;
Text.Label = Label;
Text.Truncate = Truncate;

export { Text };
