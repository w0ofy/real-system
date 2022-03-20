import React, { forwardRef, useCallback } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';
import { Button } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { makeTestId } from '@real-system/utils-library';

import { useDialogContext } from './DialogContext';

type DialogHeaderProps = BoxProps & {
  hideCloseButton?: boolean;
};

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  function DialogHeader(
    { children, hideCloseButton = false, ...restProps },
    ref
  ) {
    const { onDismiss } = useDialogContext();
    const handleOnClose = useCallback(
      () => (onDismiss ? onDismiss() : undefined),
      [onDismiss]
    );
    return (
      <Box
        as="header"
        borderBottom="weak"
        margin={0}
        flexShrink={0}
        paddingY={8}
        paddingX={8}
        ref={ref}
        data-testid={makeTestId('dialog-header')}
        {...restProps}>
        <Flex yAlignContent="center" xAlignContent="between" wrap={false}>
          <Flex grow={1} marginRight={12}>
            {children}
          </Flex>
          {hideCloseButton ? null : (
            <Button
              tabIndex={0}
              variant="minimal"
              onClick={handleOnClose}
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
