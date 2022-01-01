import React, { forwardRef } from 'react';

import { Flex, FlexProps } from '@real-system/flex';
import { makeTestId } from '@real-system/utils';

type DialogFooterProps = FlexProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ children, ...restProps }, ref) {
    return (
      <Flex
        as="footer"
        yAlignContent="center"
        shrink={0}
        py={8}
        px={8}
        borderTopStyle="solid"
        borderTopWidth="1px"
        borderTopColor="color-border-neutral-weak-9"
        data-testid={makeTestId('dialog-footer')}
        {...restProps}
        ref={ref}>
        {children}
      </Flex>
    );
  }
);

export type { DialogFooterProps };
export { DialogFooter };
