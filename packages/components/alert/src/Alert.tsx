import React, { forwardRef } from 'react';

import { Button, ButtonProps } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Typography } from '@real-system/typography';

import { AlertIntents, CommonAlertProps } from './types';
import { ICON_MAP, maybeWarning } from './utils';

type AlertProps = {
  title: string;
  children?: React.ReactNode;
  cta?: { label: string; onPress: ButtonProps['onPress'] } | undefined;
} & CommonAlertProps;

const makeBorderOrIconColor = (intent: AlertIntents) => (icon?: boolean) =>
  `color-${icon ? 'text' : 'border'}-${intent}-weak-2`;

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { children, intent = 'info', title, cta, ...restProps },
  ref
) {
  const borderOrIconColor = makeBorderOrIconColor(intent);
  const titleColor = `color-text-${intent}-${maybeWarning(intent)}`;
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
      {...restProps}
      ref={ref}>
      <Icon
        size="md"
        solid
        icon={ICON_MAP[intent]}
        color={borderOrIconColor(true)}
        mr={5}
        title={intent}
      />
      <Flex vertical yAlignContent="center" xAlignContent="left" mr={20}>
        {title && (
          <Typography.Heading
            variant="heading5"
            as="h5"
            color={titleColor}
            mt={1}>
            {title}
          </Typography.Heading>
        )}
        {children && (
          <Typography width="80%" color="color-text-neutral-weak-1">
            {children}
          </Typography>
        )}
      </Flex>

      {cta?.label && cta?.onPress && (
        <Button
          mr={0}
          mt={1}
          ml="auto"
          onPress={cta.onPress}
          variant="primary"
          intent={
            intent === 'danger'
              ? intent
              : intent === 'info' || intent === 'success'
              ? 'primary'
              : 'default'
          }>
          {cta.label}
        </Button>
      )}
    </Flex>
  );
});

export type { AlertProps };
export { Alert };
