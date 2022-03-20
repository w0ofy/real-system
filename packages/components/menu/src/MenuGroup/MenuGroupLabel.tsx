import React from 'react';

import { AriakitMenuGroupLabel } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import { CommonMenuProps } from '../types';

type MenuGroupLabelProps = {
  children?: React.ReactNode;
} & CommonMenuProps;

const MenuGroupLabel = ({ children, ...restProps }: MenuGroupLabelProps) => {
  return (
    <AriakitMenuGroupLabel
      as={Box}
      fontSize={1}
      fontWeight={2}
      lineHeight={2}
      color="gray-600"
      marginLeft={7}
      marginBottom={4}
      cursor="text"
      data-testid={makeTestId('menu-group-label')}
      {...restProps}>
      {children}
    </AriakitMenuGroupLabel>
  );
};

export type { MenuGroupLabelProps };
export { MenuGroupLabel };
