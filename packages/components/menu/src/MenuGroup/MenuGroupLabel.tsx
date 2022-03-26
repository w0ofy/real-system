import React from 'react';

import { AriakitMenuGroupLabel } from '@real-system/ariakit-library';
import type { TextPrimitiveProps } from '@real-system/text-primitive';
import { TextPrimitive } from '@real-system/text-primitive';
import { makeTestId } from '@real-system/utils-library';

type MenuGroupLabelProps = Omit<TextPrimitiveProps, 'as'>;

const MenuGroupLabel = ({ children, ...restProps }: MenuGroupLabelProps) => {
  return (
    <AriakitMenuGroupLabel
      as={TextPrimitive}
      fontSize={1}
      fontWeight={5}
      lineHeight={2}
      color="gray-500"
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
