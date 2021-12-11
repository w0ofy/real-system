import React, { forwardRef } from 'react';

import { Box } from '@real-system/box';
import { Icon, IconProps } from '@real-system/icon';
import { Text } from '@real-system/text';
import { PaletteIntents } from '@real-system/theme';

import { InternalTypographyProps } from './types';

type HelpTextIntents = Extract<PaletteIntents, 'danger'> | 'default';
export type HelpTextProps = {
  as?: 'span' | 'div';
  children?: React.ReactNode;
  id?: string;
  variant?: HelpTextIntents;
} & InternalTypographyProps;

const LABEL_INTENT_MAP: { [key in HelpTextIntents]: string } = {
  danger: 'danger',
  default: 'neutral-weak-3',
};
const ICON_INTENT_MAP: {
  [key in HelpTextIntents]: IconProps['intent'];
} = {
  danger: 'danger',
  default: 'default',
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(
  (
    { children, variant = 'default', as = 'span', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <Text
        as={as}
        display="flex"
        alignItems="center"
        p={0}
        m={0}
        mt={5}
        fontSize={2}
        fontWeight={0}
        lineHeight={2}
        color={`color-text-${LABEL_INTENT_MAP[variant]}`}
        {...restProps}
        ref={ref}>
        <Box>
          {variant === 'danger' && (
            <Icon
              icon="exclamation-circle-icon"
              intent={ICON_INTENT_MAP[variant]}
              mr={2}
              size="size-icon-30"
            />
          )}
        </Box>
        <Box as="span">{children}</Box>
      </Text>
    );
  }
);

HelpText.displayName = 'HelpText';

export { HelpText };
