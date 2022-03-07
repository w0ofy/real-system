import React, { forwardRef } from 'react';

import { AlertPrimitive } from '@real-system/alert-primitive';
import { Button, ButtonProps } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { CommonAlertProps } from './types';
import { ICON_MAP } from './utils';

type AlertProps = {
  description?: string;
  children: React.ReactNode;
  onDismiss?: ButtonProps['onClick'];
  dismissRef?: React.Ref<HTMLButtonElement>;
} & CommonAlertProps;

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    children,
    intent = 'info',
    description,
    onDismiss = undefined,
    type = 'polite',
    dismissRef,
    ...restProps
  },
  ref
) {
  const bgColor = `color-background-${intent}-weak-95`;
  const borderColor = `color-border-${intent}`;
  const iconColor = `color-text-${intent}`;

  return (
    <Flex
      inline
      yAlignContent="top"
      xAlignContent="left"
      width="100%"
      padding={7}
      borderRadius={2}
      borderStyle="solid"
      borderWidth={1}
      borderColor={borderColor}
      backgroundColor={bgColor}
      data-testid={makeTestId('alert')}
      {...restProps}
      ref={ref}>
      <Icon
        size="md"
        solid
        icon={ICON_MAP[intent]}
        textColor={iconColor}
        marginRight={5}
        title={`${intent} ${children ? ': ' + children : ''}`}
      />
      <Flex
        vertical
        yAlignContent="center"
        xAlignContent="left"
        marginRight={20}>
        <AlertPrimitive type={type}>
          {children && (
            <Text.Heading variant="heading5" as="h5" marginTop={1}>
              {children}
            </Text.Heading>
          )}
          {description && <Text>{description}</Text>}
        </AlertPrimitive>
      </Flex>

      {onDismiss && (
        <Button
          ref={dismissRef}
          marginRight={0}
          marginTop={1}
          marginLeft="auto"
          onClick={onDismiss}
          variant="floating">
          <Icon icon="x" size="md" />
        </Button>
      )}
    </Flex>
  );
});

export type { AlertProps };
export { Alert };
