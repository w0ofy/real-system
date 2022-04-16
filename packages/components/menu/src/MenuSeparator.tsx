import React, { forwardRef } from 'react';

import {
  AriakitMenuSeparator,
  AriakitMenuSeparatorProps,
} from '@real-system/ariakit-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuState } from './types';

type MenuSeparatorProps = OmitMenuState<AriakitMenuSeparatorProps> &
  CommonMenuProps;

const StyledSeparator = styled(AriakitMenuSeparator)<AriakitMenuSeparatorProps>(
  {}
);
/**
 * @todo Use height instead of margins
 */
const MenuSeparator = forwardRef<HTMLHRElement, MenuSeparatorProps>(
  function MenuSeparator(props, ref) {
    return (
      <StyledSeparator
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
