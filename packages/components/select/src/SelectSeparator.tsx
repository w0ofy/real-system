import React from 'react';

import type { AriakitSelectSeparatorProps } from '@real-system/ariakit-library';
import { AriakitSelectSeparator } from '@real-system/ariakit-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { OmitSelectPrivateProps } from './types';

type SelectSeparatorProps = OmitSelectPrivateProps<AriakitSelectSeparatorProps>;

const StyledSeparator = styled(
  AriakitSelectSeparator
)<AriakitSelectSeparatorProps>({});

const SelectSeparator = (props: SelectSeparatorProps) => {
  return (
    <StyledSeparator
      width="100%"
      height={0}
      marginY={3}
      border="none"
      borderTop="weak"
      data-testid={makeTestId('select-separator')}
      {...props}
    />
  );
};

export type { SelectSeparatorProps };
export { SelectSeparator };
