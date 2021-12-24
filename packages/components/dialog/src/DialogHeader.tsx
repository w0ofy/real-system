import React, { forwardRef, useCallback } from 'react';

import { Box, BoxProps } from '@real-system/box';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import { makeTestId } from '@real-system/utils';

import { useDialogContext } from './DialogContext';

const Flex = (props: BoxProps) => <Box display="flex" {...props} />;

type DialogHeaderProps = BoxProps & {
  showCloseButton?: boolean;
};

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  function DialogHeader({ children, showCloseButton = true, ...props }, ref) {
    const { hide } = useDialogContext();
    const handleOnClose = useCallback(
      () => (hide ? hide() : undefined),
      [hide]
    );
    return (
      <Box
        as="header"
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        borderBottomColor="color-border-neutral-weak-8"
        margin={0}
        flexShrink={0}
        py={7}
        ref={ref}
        data-testid={makeTestId('dialog-header')}
        {...props}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center" flexGrow={1} pl={7} mr={12}>
            {children}
          </Flex>
          <Button
            variant="minimal"
            mr={7}
            onPress={handleOnClose}
            data-testid={makeTestId('dialog-close-button')}>
            <Icon icon="x" title="close" />
          </Button>
        </Flex>
      </Box>
    );
  }
);

export type { DialogHeaderProps };
export { DialogHeader };
