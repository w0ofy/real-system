import React, { forwardRef } from 'react';

import { AlertPrimitive } from '@real-system/alert-primitive';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Typography } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import type { AlertIntents, CommonAlertProps } from './types';
import { ICON_MAP } from './utils';

type InlineAlertProps = {
  /**
   * The alert message
   */
  children: React.ReactNode;
} & CommonAlertProps;

const maybeWarning = (intent: AlertIntents) =>
  intent === 'warning' ? 'strong-45' : 'strong-2';

const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  function InlineAlert(
    { children, intent = 'info', type = 'polite', ...restProps },
    ref
  ) {
    const iconColor = `color-text-${intent}`;
    const textColor = `color-text-${intent}-${maybeWarning(intent)}`;
    return (
      <Flex
        width="100%"
        yAlignContent="center"
        flexWrap="nowrap"
        data-testid={makeTestId('inline-alert')}
        {...restProps}
        ref={ref}>
        <Flex mt={1} mr={4} alignSelf="flex-start">
          <Icon
            size="md"
            solid
            icon={ICON_MAP[intent]}
            color={iconColor}
            title={intent}
          />
        </Flex>
        <AlertPrimitive type={type}>
          <Typography.Heading
            variant="heading5"
            as="span"
            color={textColor}
            mb={0}>
            {children}
          </Typography.Heading>
        </AlertPrimitive>
      </Flex>
    );
  }
);

export type { InlineAlertProps };
export { InlineAlert };
