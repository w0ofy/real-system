import React, { forwardRef } from 'react';

import { Flex, FlexProps } from '@real-system/flex';
import { makeTestId } from '@real-system/utils';

type DialogFooterProps = FlexProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ children, ...props }, ref) {
    return (
      <Flex
        as="footer"
        yAlignContent="center"
        shrink={0}
        py={7}
        px={8}
        borderTopStyle="solid"
        borderTopWidth="1px"
        borderTopColor="color-border-neutral-weak-8"
        ref={ref}
        data-testid={makeTestId('dialog-footer')}
        {...props}>
        {children}
      </Flex>
    );
  }
);

export type { DialogFooterProps };
export { DialogFooter };
