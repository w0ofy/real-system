import React from 'react';

import type { AriakitSelectGroupLabelProps } from '@real-system/ariakit-library';
import { AriakitSelectGroupLabel } from '@real-system/ariakit-library';
import type { BoxProps } from '@real-system/box-primitive';
import { boxAs } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import { CommonSelectProps } from '../types';

const BoxAsGroupLabel = boxAs(AriakitSelectGroupLabel);

type SelectGroupLabelProps = CommonSelectProps<AriakitSelectGroupLabelProps>;

const SelectGroupLabel = (props: SelectGroupLabelProps) => {
  return (
    <BoxAsGroupLabel
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
