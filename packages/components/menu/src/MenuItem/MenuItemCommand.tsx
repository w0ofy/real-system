import React, { forwardRef } from 'react';

import type { TextPrimitiveProps } from '@real-system/text-primitive';
import { TextPrimitive } from '@real-system/text-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuItemCommandProps = Omit<TextPrimitiveProps, 'as'>;

const MenuItemCommand = forwardRef<HTMLSpanElement, MenuItemCommandProps>(
  function MenuItemCommand({ children, ...restProps }, ref) {
    return (
      <TextPrimitive
        marginLeft="auto"
        marginRight={0}
        data-testid={makeTestId('menu-item-icon')}
        as="span"
        color="gray-400"
        fontWeight={0}
        role="img"
        ref={ref}
        {...restProps}>
        ⌘{children}
      </TextPrimitive>
    );
  }
);

export type { MenuItemCommandProps };
export { MenuItemCommand };
