import * as React from 'react';

import type { BoxProps } from '@real-system/box-primitive';
import { Box } from '@real-system/box-primitive';
import { MenuGroupLabelPrimitive } from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuGroupLabelProps = Omit<BoxProps, 'as'>;

const MenuGroupLabel = ({ children, ...restProps }: MenuGroupLabelProps) => {
  return (
    <MenuGroupLabelPrimitive
      as={Box}
      fontSize={1}
      fontWeight={5}
      lineHeight={1}
      letterSpacing="body"
      color="gray-500"
      margin={0}
      marginLeft={7}
      marginBottom={4}
      cursor="text"
      data-testid={makeTestId('menu-group-label')}
      {...restProps}>
      {children}
    </MenuGroupLabelPrimitive>
  );
};

export type { MenuGroupLabelProps };
export { MenuGroupLabel };
