import React, { forwardRef } from 'react';

import { Flex, FlexProps } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

type DialogFooterProps = FlexProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ children, ...restProps }, ref) {
    return (
      <Flex
        as="footer"
        yAlignContent="center"
        shrink={0}
        paddingY={8}
        paddingX={8}
        borderTop="weak"
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
