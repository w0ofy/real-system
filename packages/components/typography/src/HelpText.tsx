import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import { Icon, IconProps } from '@real-system/icon';
import { ColorTokens } from '@real-system/theme-library';

import { BaseText } from './BaseText';
import type { CommonTextProps } from './types';

type HelpTextIntents = Extract<IconProps['intent'], 'danger' | 'neutral'>;
export type HelpTextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'div'>;
  children?: React.ReactNode;
  id?: string;
  intent?: HelpTextIntents;
  hideErrorIcon?: boolean;
  errorText?: string;
} & CommonTextProps;

const LABEL_COLORS: Record<HelpTextIntents, ColorTokens> = {
  danger: 'red-500',
  neutral: 'gray-500',
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(function HelpText(
  {
    children,
    as = 'span',
    hideErrorIcon = false,
    errorText,
    intent: intentProp = 'neutral',
    ...restProps
  },
  ref
) {
  const intent = useMemo(
    () => (errorText ? 'danger' : intentProp),
    [errorText, intentProp]
  );

  return (
    <BaseText
      as={as}
      display="flex"
      alignItems="center"
      padding={0}
      margin={0}
      marginTop={2}
      fontSize={1}
      fontWeight={2}
      lineHeight={1}
      color={LABEL_COLORS[intent]}
      {...restProps}
      ref={ref}>
      {!hideErrorIcon && errorText && (
        <Box>
          <Icon
            icon="exclamation-circle"
            solid
            intent={intent}
            marginRight={2}
          />
        </Box>
      )}
      <Box as="span">{errorText ? errorText : children}</Box>
    </BaseText>
  );
});

export { HelpText };
