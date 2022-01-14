import React, { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Typography } from '@real-system/typography';

import type { CommonAlertProps } from './types';
import { ICON_MAP, maybeWarning } from './utils';

type InlineAlertProps = {
  children: React.ReactNode;
} & CommonAlertProps;

const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  function InlineAlert({ children, intent = 'info', ...restProps }, ref) {
    const iconColor = `color-text-${intent}-weak-1`;
    const textColor = `color-text-${intent}-${maybeWarning(intent)}`;
    return (
      <Flex width="100%" yAlignContent="center" {...restProps} ref={ref}>
        <Icon
          size="md"
          solid
          icon={ICON_MAP[intent]}
          color={iconColor}
          mr={5}
          title={intent}
        />
        <Typography.Heading
          variant="heading5"
          as="span"
          color={textColor}
          mb={0}>
          {children}
        </Typography.Heading>
      </Flex>
    );
  }
);

export type { InlineAlertProps };
export { InlineAlert };
