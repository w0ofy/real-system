import React, { forwardRef } from 'react';

import type { SelectGroupPrimitiveProps } from '@real-system/select-primitive';
import { SelectGroupPrimitive } from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styled-library';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { OmitSelectPrivateProps } from '../types';

import { SelectGroupLabel } from './SelectGroupLabel';

type SelectGroupProps = OmitSelectPrivateProps<SelectGroupPrimitiveProps> &
  StylishProps;

const StyledSelectGroup = styled(SelectGroupPrimitive)<SelectGroupProps>({
  _firstAndNotOnly: {
    borderBottom: 'weak',
    paddingBottom: 3,
  },
});

export interface SelectGroupComponent
  extends React.ForwardRefExoticComponent<SelectGroupProps> {
  Label: typeof SelectGroupLabel;
}

// @ts-ignore SelectGroup properties are defined below
const SelectGroup: SelectGroupComponent = forwardRef<
  HTMLDivElement,
  SelectGroupProps
>(function SelectGroup({ children, ...restProps }, ref) {
  return (
    <StyledSelectGroup
      paddingTop={4}
      data-testid={makeTestId('select-group')}
      {...restProps}
      ref={ref}>
      {children}
    </StyledSelectGroup>
  );
});

SelectGroup.Label = SelectGroupLabel;

export type { SelectGroupProps };
export { SelectGroup };
