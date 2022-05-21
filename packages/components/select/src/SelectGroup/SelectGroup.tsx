import React from 'react';

import type { SelectGroupPrimitiveProps } from '@real-system/select-primitive';
import { SelectGroupPrimitive } from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styled-library';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { OmitSelectPrivateProps } from '../types';

type SelectGroupProps = OmitSelectPrivateProps<SelectGroupPrimitiveProps> &
  StylishProps;

const StyledSelectGroup = styled(SelectGroupPrimitive)<SelectGroupProps>({});

const SelectGroup = ({ children, ...restProps }: SelectGroupProps) => {
  return (
    <StyledSelectGroup
      paddingTop={4}
      data-testid={makeTestId('select-group')}
      {...restProps}>
      {children}
    </StyledSelectGroup>
  );
};

export type { SelectGroupProps };
export { SelectGroup };
