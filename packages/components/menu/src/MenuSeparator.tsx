import React, { forwardRef } from 'react';

import {
  AriakitMenuSeparator,
  AriakitMenuSeparatorProps,
} from '@real-system/ariakit-library';
import { boxAs } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuState } from './types';

type MenuSeparatorProps = OmitMenuState<AriakitMenuSeparatorProps> &
  CommonMenuProps;

const BoxAsSeparator = boxAs(AriakitMenuSeparator);
/**
 * @todo Use height instead of margins
 */
const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  function MenuSeparator(props, ref) {
    return (
      <BoxAsSeparator
        width="100%"
        height={0}
        marginY={3}
        border="none"
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
