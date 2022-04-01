import React, { forwardRef } from 'react';

import type { BoxProps } from '@real-system/box-primitive';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuItemCommandProps = Omit<BoxProps, 'as'>;

const MenuItemCommand = forwardRef<HTMLSpanElement, MenuItemCommandProps>(
  function MenuItemCommand({ children, ...restProps }, ref) {
    return (
      <Box
        margin={0}
        marginLeft="auto"
        marginRight={0}
        data-testid={makeTestId('menu-item-icon')}
        as="span"
        color="gray-400"
        fontSize={1}
        fontWeight={2}
        lineHeight={2}
        letterSpacing="body"
        role="img"
        {...restProps}
        ref={ref}>
        ⌘{children}
      </Box>
    );
  }
);

export type { MenuItemCommandProps };
export { MenuItemCommand };
