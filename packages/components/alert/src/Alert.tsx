import React, { forwardRef } from 'react';

import { AlertPrimitive } from '@real-system/alert-primitive';
import { Button, ButtonProps } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Typography } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { AlertIntents, CommonAlertProps } from './types';
import { ICON_MAP } from './utils';

type AlertProps = {
  description?: string;
  children: React.ReactNode;
  onDismiss?: ButtonProps['onClick'];
  dismissRef?: React.Ref<HTMLButtonElement>;
} & CommonAlertProps;

const makeBorderOrIconColor = (intent: AlertIntents) => (icon?: boolean) =>
  `color-${icon ? 'text' : 'border'}-${intent}`;

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
  const borderOrIconColor = makeBorderOrIconColor(intent);
  const bgColor = `color-background-${intent}-weak-95`;

  return (
    <Flex
      inline
      yAlignContent="top"
      xAlignContent="left"
      width="100%"
      p={7}
      borderRadius={2}
      borderStyle="solid"
      borderWidth={1}
      borderColor={borderOrIconColor()}
      backgroundColor={bgColor}
      data-testid={makeTestId('alert')}
      {...restProps}
      ref={ref}>
      <Icon
        size="md"
        solid
        icon={ICON_MAP[intent]}
        color={borderOrIconColor(true)}
        mr={5}
        title={`${intent} ${children ? ': ' + children : ''}`}
      />
      <Flex vertical yAlignContent="center" xAlignContent="left" mr={20}>
        <AlertPrimitive type={type}>
          {children && (
            <Typography.Heading variant="heading5" as="h5" mt={1}>
              {children}
            </Typography.Heading>
          )}
          {description && <Typography>{description}</Typography>}
        </AlertPrimitive>
      </Flex>

      {onDismiss && (
        <Button
          ref={dismissRef}
          mr={0}
          mt={1}
          ml="auto"
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
