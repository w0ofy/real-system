import * as React from 'react';

import { AriakitMenuGroupLabel } from '@real-system/ariakit-library';
import type { BoxProps } from '@real-system/box-primitive';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuGroupLabelProps = Omit<BoxProps, 'as'>;

const MenuGroupLabel = ({ children, ...restProps }: MenuGroupLabelProps) => {
  return (
    <AriakitMenuGroupLabel
      as={Box}
      fontSize={1}
      fontWeight={5}
      lineHeight={2}
      letterSpacing="body"
      color="gray-500"
      margin={0}
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
