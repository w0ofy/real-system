import React, { forwardRef } from 'react';

import {
  BaseText,
  Code,
  Heading,
  HelpText,
  Label,
  Truncate,
} from './components';
import type { CommonTextProps, TextAsTags } from './Text.model';

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
  Help: typeof HelpText;
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
Text.Help = HelpText;
Text.Label = Label;
Text.Truncate = Truncate;

export { Text };
