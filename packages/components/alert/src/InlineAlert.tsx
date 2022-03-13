import React, { forwardRef } from 'react';

import { AlertPrimitive } from '@real-system/alert-primitive';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import type { AlertIntents, CommonAlertProps } from './types';
import { ICON_MAP, INTENT_COLOR_MAP } from './utils';

type InlineAlertProps = {
  /**
   * The alert message
   */
  children: React.ReactNode;
} & CommonAlertProps;

const maybeWarning = (intent: AlertIntents) =>
  intent === 'warning' ? '700' : '600';

const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  function InlineAlert(
    { children, intent = 'info', type = 'polite', ...restProps },
    ref
  ) {
    const iconColor = `${INTENT_COLOR_MAP[intent]}-500`;
    const textColor = `${INTENT_COLOR_MAP[intent]}-${maybeWarning(intent)}`;
    return (
      <Flex
        width="100%"
        yAlignContent="center"
        flexWrap="nowrap"
        data-testid={makeTestId('inline-alert')}
        {...restProps}
        ref={ref}>
        <Flex marginTop={1} marginRight={4} alignSelf="flex-start">
          <Icon
            size="md"
            solid
            icon={ICON_MAP[intent]}
            color={iconColor}
            title={intent}
          />
        </Flex>
        <AlertPrimitive type={type}>
          <Text.Heading size="h5" as="span" color={textColor} marginBottom={0}>
            {children}
          </Text.Heading>
        </AlertPrimitive>
      </Flex>
    );
  }
);

export type { InlineAlertProps };
export { InlineAlert };
