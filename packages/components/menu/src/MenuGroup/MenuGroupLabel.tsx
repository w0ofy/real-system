import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { MenuGroupLabelPrimitive } from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuGroupLabelProps = RealElementPrimitiveProps<'div'>;

const MenuGroupLabel = ({ children, ...restProps }: MenuGroupLabelProps) => {
  return (
    <MenuGroupLabelPrimitive
      render={
        <real.div
          fontScale="group-label"
          fontWeight="group-label"
          letterSpacing="group-label"
          color="gray-500"
          margin={0}
          paddingX={8}
          marginBottom={4}
          cursor="text"
        />
      }
      data-testid={makeTestId('menu-group-label')}
      {...restProps}>
      {children}
    </MenuGroupLabelPrimitive>
  );
};

export type { MenuGroupLabelProps };
export { MenuGroupLabel };
