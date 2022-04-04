import React from 'react';

import type { AriakitSelectSeparatorProps } from '@real-system/ariakit-library';
import { AriakitSelectSeparator } from '@real-system/ariakit-library';
import type { BoxProps } from '@real-system/box-primitive';
import { boxAs } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import { OmitSelectPrivateProps } from './types';

type SelectSeparatorProps =
  OmitSelectPrivateProps<AriakitSelectSeparatorProps> & BoxProps;

const BoxAsSeparator = boxAs(AriakitSelectSeparator);

const SelectSeparator = (props: SelectSeparatorProps) => {
  return (
    <BoxAsSeparator
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
