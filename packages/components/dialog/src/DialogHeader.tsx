import React, { forwardRef, useCallback } from 'react';

import { Box, BoxProps } from '@real-system/box';
import { Button } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { makeTestId } from '@real-system/utils';

import { useDialogContext } from './DialogContext';

type DialogHeaderProps = BoxProps & {
  hideCloseButton?: boolean;
};

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  function DialogHeader(
    { children, hideCloseButton = false, ...restProps },
    ref
  ) {
    const { dismiss } = useDialogContext();
    const handleOnClose = useCallback(
      () => (dismiss ? dismiss() : undefined),
      [dismiss]
    );
    return (
      <Box
        as="header"
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        borderBottomColor="color-border-neutral-weak-9"
        margin={0}
        flexShrink={0}
        py={8}
        px={8}
        ref={ref}
        data-testid={makeTestId('dialog-header')}
        {...restProps}>
        <Flex yAlignContent="center" xAlignContent="between" wrap={false}>
          <Flex grow={1} mr={12}>
            {children}
          </Flex>
          {hideCloseButton ? null : (
            <Button
              tabIndex={0}
              variant="minimal"
              onPress={handleOnClose}
              data-testid={makeTestId('dialog-close-button')}>
              <Icon icon="x" title="close" />
            </Button>
          )}
        </Flex>
      </Box>
    );
  }
);

export type { DialogHeaderProps };
export { DialogHeader };
