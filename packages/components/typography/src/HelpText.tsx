import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import { Icon, IconProps } from '@real-system/icon';
import { TextPrimitive } from '@real-system/text-primitive';
import { PaletteIntents } from '@real-system/theme-library';

import { InternalTypographyProps } from './types';

type HelpTextIntents = Extract<PaletteIntents, 'danger'> | 'default';
export type HelpTextProps = {
  as?: 'span' | 'div';
  children?: React.ReactNode;
  id?: string;
  variant?: HelpTextIntents;
  hideErrorIcon?: boolean;
  errorText?: string;
} & InternalTypographyProps;

const LABEL_INTENT_MAP: { [key in HelpTextIntents]: string } = {
  danger: 'danger',
  default: 'neutral-weak-2',
};
const ICON_INTENT_MAP: {
  [key in HelpTextIntents]: IconProps['intent'];
} = {
  danger: 'danger',
  default: 'default',
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(
  (
    {
      children,
      variant = 'default',
      as = 'span',
      hideErrorIcon = false,
      errorText,
      ...restProps
    },
    ref
  ): React.ReactElement => {
    const variantOverride = useMemo(
      () => (hideErrorIcon || errorText ? 'danger' : variant),
      [hideErrorIcon, errorText, variant]
    );

    return (
      <TextPrimitive
        as={as}
        display="flex"
        alignItems="center"
        p={0}
        m={0}
        mt={2}
        fontSize={1}
        fontWeight={0}
        lineHeight={1}
        color={`color-text-${LABEL_INTENT_MAP[variantOverride]}`}
        {...restProps}
        ref={ref}>
        {!hideErrorIcon && errorText && (
          <Box>
            <Icon
              icon="exclamation-circle"
              solid
              intent={ICON_INTENT_MAP[variantOverride]}
              mr={2}
            />
          </Box>
        )}
        <Box as="span">{errorText ? errorText : children}</Box>
      </TextPrimitive>
    );
  }
);

HelpText.displayName = 'HelpText';

export { HelpText };
