import React from 'react';

import type { SelectSeparatorPrimitiveProps } from '@real-system/select-primitive';
import { SelectSeparatorPrimitive } from '@real-system/select-primitive';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { OmitSelectPrivateProps } from './types';

type SelectSeparatorProps =
  OmitSelectPrivateProps<SelectSeparatorPrimitiveProps>;

const StyledSeparator = styled(
  SelectSeparatorPrimitive
)<SelectSeparatorPrimitiveProps>({});

const SelectSeparator = ({ children, ...restProps }: SelectSeparatorProps) => {
  return (
    <StyledSeparator
      width="100%"
      height={0}
      marginY={3}
      border="none"
      borderTop="weak"
      data-testid={makeTestId('select-separator')}
      {...restProps}>
      {children}
    </StyledSeparator>
  );
};

export type { SelectSeparatorProps };
export { SelectSeparator };
