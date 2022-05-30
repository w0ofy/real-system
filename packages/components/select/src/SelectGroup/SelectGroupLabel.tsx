import React from 'react';

import type { SelectGroupLabelPrimitiveProps } from '@real-system/select-primitive';
import { SelectGroupLabelPrimitive } from '@real-system/select-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { CommonSelectProps } from '../types';

const StyledGroupLabel = styled(
  SelectGroupLabelPrimitive
)<SelectGroupLabelPrimitiveProps>({});

type SelectGroupLabelProps = CommonSelectProps<SelectGroupLabelPrimitiveProps>;

const SelectGroupLabel = ({
  children,
  ...restProps
}: SelectGroupLabelProps) => {
  return (
    <StyledGroupLabel
      data-testid={makeTestId('select-group')}
      fontScale="label"
      fontWeight="label"
      letterSpacing="body"
      color="gray-500"
      m={0}
      ml={7}
      mb={4}
      cursor="text"
      {...restProps}>
      {children}
    </StyledGroupLabel>
  );
};

export type { SelectGroupLabelProps };
export { SelectGroupLabel };
