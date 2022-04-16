import React from 'react';

import type { AriakitSelectGroupProps } from '@real-system/ariakit-library';
import { AriakitSelectGroup } from '@real-system/ariakit-library';
import type { StylishProps } from '@real-system/styling-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { OmitSelectPrivateProps } from '../types';

type SelectGroupProps = OmitSelectPrivateProps<AriakitSelectGroupProps> &
  StylishProps;

const StyledGroup = styled(AriakitSelectGroup)<AriakitSelectGroupProps>({});

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
