import React, { forwardRef } from 'react';

import {
  AriakitMenuSeparator,
  AriakitMenuSeparatorProps,
} from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import { CommonMenuProps, OmitMenuState } from './types';

type MenuSeparatorProps = OmitMenuState<AriakitMenuSeparatorProps> &
  CommonMenuProps;

/**
 * @todo Use height instead of margins
 */
const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  function MenuSeparator(props, ref) {
    return (
      <AriakitMenuSeparator
        as={Box}
        height={0}
        marginY={3}
        borderTop="weak"
        data-testid={makeTestId('menu-separator')}
        {...props}
        ref={ref}
      />
    );
  }
);

export type { MenuSeparatorProps };
export { MenuSeparator };
