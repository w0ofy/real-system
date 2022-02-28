import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import { TextPrimitive } from '@real-system/text-primitive';
import { PaletteIntents, useComponentTokens } from '@real-system/theme-library';

import { CommonTextProps } from './types';

type HelpTextIntents = Extract<PaletteIntents, 'danger'> | 'default';
export type HelpTextProps = {
  as?: 'span' | 'div';
  children?: React.ReactNode;
  id?: string;
  intent?: HelpTextIntents;
  hideErrorIcon?: boolean;
  errorText?: string;
} & CommonTextProps;

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(function HelpText(
  {
    children,
    intent = 'default',
    as = 'span',
    hideErrorIcon = false,
    errorText,
    ...restProps
  },
  ref
) {
  const intentOverride = useMemo(
    () => (errorText ? 'danger' : intent),
    [errorText, intent]
  );

  const { text, icon } = useComponentTokens<'helpText'>('helpText').parts;

  return (
    <TextPrimitive
      as={as}
      {...text.baseStyles}
      {...text.intents[intentOverride]()}
      {...restProps}
      ref={ref}>
      {!hideErrorIcon && errorText && (
        <Box>
          <Icon
            icon="exclamation-circle"
            solid
            intent={intentOverride}
            {...icon.baseStyles}
          />
        </Box>
      )}
      <Box as="span">{errorText ? errorText : children}</Box>
    </TextPrimitive>
  );
});

export { HelpText };
