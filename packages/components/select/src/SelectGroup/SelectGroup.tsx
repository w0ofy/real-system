import React from 'react';

import type { SelectGroupPrimitiveProps } from '@real-system/select-primitive';
import { SelectGroupPrimitive } from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styling-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { OmitSelectPrivateProps } from '../types';

type SelectGroupProps = OmitSelectPrivateProps<SelectGroupPrimitiveProps> &
  StylishProps;

const StyledGroup = styled(SelectGroupPrimitive)<SelectGroupPrimitiveProps>({});

const SelectGroup = (props: SelectGroupProps) => {
  return (
    <StyledGroup
      paddingTop={4}
      data-testid={makeTestId('select-group')}
      {...props}
    />
  );
};

export type { SelectGroupProps };
export { SelectGroup };
