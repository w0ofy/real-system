import React, { forwardRef } from 'react';

import type { MenuSeparatorPrimitiveProps } from '@real-system/menu-primitive';
import { MenuSeparatorPrimitive } from '@real-system/menu-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuState } from './types';

type MenuSeparatorProps = OmitMenuState<MenuSeparatorPrimitiveProps> &
  CommonMenuProps;

const StyledSeparator = styled(
  MenuSeparatorPrimitive
)<MenuSeparatorPrimitiveProps>({});
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
