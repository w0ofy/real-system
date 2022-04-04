import React from 'react';

import type { AriakitSelectGroupProps } from '@real-system/ariakit-library';
import { AriakitSelectGroup } from '@real-system/ariakit-library';
import type { BoxProps } from '@real-system/box-primitive';
import { boxAs } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import { OmitSelectPrivateProps } from '../types';

type SelectGroupProps = OmitSelectPrivateProps<AriakitSelectGroupProps> &
  BoxProps;

const BoxAsGroup = boxAs(AriakitSelectGroup);

const SelectGroup = (props: SelectGroupProps) => {
  return (
    <BoxAsGroup
      paddingTop={4}
      data-testid={makeTestId('select-group')}
      {...props}
    />
  );
};

export type { SelectGroupProps };
export { SelectGroup };
