import React, { forwardRef } from 'react';

import { Box } from '@real-system/box';
import { Icon, IconProps } from '@real-system/icon';
import { PaletteIntents } from '@real-system/theme';

import { InternalTypographyProps } from './types';

type HelpTextIntents = Extract<PaletteIntents, 'danger'> | 'default';
export type HelpTextProps = {
  children?: React.ReactNode;
  id?: string;
  variant?: HelpTextIntents;
} & InternalTypographyProps;

const LABEL_INTENT_MAP: { [key in HelpTextIntents]: string } = {
  danger: 'danger',
  default: 'neutral-weak',
};
const ICON_INTENT_MAP: {
  [key in HelpTextIntents]: IconProps['intent'];
} = {
  danger: 'danger',
  default: 'default',
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(
  (
    { children, variant = 'default', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <Box
        as="span"
        display="flex"
        alignItems="center"
        p={0}
        m={0}
        mt={4}
        fontSize={2}
        fontWeight={0}
        lineHeight={2}
        color={`color-text-${LABEL_INTENT_MAP[variant]}`}
        {...restProps}
        ref={ref}>
        <Box>
          {variant === 'danger' && (
            <Icon
              icon="alert-triangle"
              intent={ICON_INTENT_MAP[variant]}
              mr={2}
              size="size-icon-20"
            />
          )}
        </Box>
        <Box as="span">{children}</Box>
      </Box>
    );
  }
);

HelpText.displayName = 'HelpText';

export { HelpText };
