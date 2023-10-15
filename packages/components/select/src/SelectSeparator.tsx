import React, { forwardRef } from 'react';

import type { SelectSeparatorPrimitiveProps } from '@real-system/select-primitive';
import { SelectSeparatorPrimitive } from '@real-system/select-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { OmitSelectPrivateProps } from './types';

type SelectSeparatorProps =
  OmitSelectPrivateProps<SelectSeparatorPrimitiveProps>;

const StyledSeparator = styled(
  SelectSeparatorPrimitive
)<SelectSeparatorPrimitiveProps>({});

const SelectSeparator = forwardRef<HTMLHRElement, SelectSeparatorProps>(
  function SelectSeparator({ children, ...restProps }, ref) {
    return (
      <StyledSeparator
        width="100%"
        height={0}
        marginY={3}
        border="none"
        borderTop="weak"
        data-testid={makeTestId('select-separator')}
        {...restProps}
        ref={ref}>
        {children}
      </StyledSeparator>
    );
  }
);

export type { SelectSeparatorProps };
export { SelectSeparator };
