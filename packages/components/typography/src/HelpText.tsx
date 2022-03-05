import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import { Icon, IconProps } from '@real-system/icon';
import { TextPrimitive } from '@real-system/text-primitive';
import { PaletteIntents } from '@real-system/theme-library';

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

const LABEL_INTENT: { [key in HelpTextIntents]: string } = {
  danger: 'danger',
  default: 'neutral-weak-1',
};
const ICON_INTENT: {
  [key in HelpTextIntents]: IconProps['intent'];
} = {
  danger: 'danger',
  default: 'default',
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(function HelpText(
  {
    children,
    variant = 'default',
    as = 'span',
    hideErrorIcon = false,
    errorText,
    ...restProps
  },
  ref
) {
  const variantOverride = useMemo(
    () => (errorText ? 'danger' : variant),
    [errorText, variant]
  );

  return (
    <TextPrimitive
      as={as}
      display="flex"
      alignItems="center"
      padding={0}
      margin={0}
      marginTop={2}
      fontSize={1}
      fontWeight={0}
      lineHeight={1}
      color={`color-text-${LABEL_INTENT[variantOverride]}`}
      {...restProps}
      ref={ref}>
      {!hideErrorIcon && errorText && (
        <Box>
          <Icon
            icon="exclamation-circle"
            solid
            intent={ICON_INTENT[variantOverride]}
            marginRight={2}
          />
        </Box>
      )}
      <Box as="span">{errorText ? errorText : children}</Box>
    </TextPrimitive>
  );
});

export { HelpText };
