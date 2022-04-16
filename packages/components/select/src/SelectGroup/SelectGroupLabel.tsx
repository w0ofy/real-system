import React from 'react';

import type { AriakitSelectGroupLabelProps } from '@real-system/ariakit-library';
import { AriakitSelectGroupLabel } from '@real-system/ariakit-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { CommonSelectProps } from '../types';

const StyledGroupLabel = styled(
  AriakitSelectGroupLabel
)<AriakitSelectGroupLabelProps>({});

type SelectGroupLabelProps = CommonSelectProps<AriakitSelectGroupLabelProps>;

const SelectGroupLabel = (props: SelectGroupLabelProps) => {
  return (
    <StyledGroupLabel
      data-testid={makeTestId('select-group')}
      fontSize={1}
      fontWeight={5}
      lineHeight={1}
      letterSpacing="body"
      color="gray-500"
      m={0}
      ml={7}
      mb={4}
      cursor="text"
      {...props}
    />
  );
};

export type { SelectGroupLabelProps };
export { SelectGroupLabel };
