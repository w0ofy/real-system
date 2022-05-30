import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuItemCommandProps = RealElementPrimitiveProps<'span'>;

const MenuItemCommand = forwardRef<HTMLSpanElement, MenuItemCommandProps>(
  function MenuItemCommand({ children, ...restProps }, ref) {
    return (
      <real.span
        margin={0}
        marginLeft="auto"
        marginRight={0}
        data-testid={makeTestId('menu-item-icon')}
        color="gray-400"
        fontScale="help"
        fontWeight="help"
        role="img"
        alt={`⌘ + ${children}`}
        {...restProps}
        ref={ref}>
        <>⌘{children}</>
      </real.span>
    );
  }
);

export type { MenuItemCommandProps };
export { MenuItemCommand };
