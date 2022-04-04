import React from 'react';

import type { AriakitSelectPopoverProps } from '@real-system/ariakit-library';
import { AriakitSelectPopover } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';

import { useSelectStateContext } from './SelectContext';
import { OmitSelectPrivateProps } from './types';

type SelectPopoverProps = OmitSelectPrivateProps<AriakitSelectPopoverProps>;

/**
 * @todo animate popover
 */
const SelectPopover = (props: SelectPopoverProps) => {
  const state = useSelectStateContext();

  return (
    <AriakitSelectPopover
      as={Box}
      zIndex="popover"
      display="flex"
      maxHeight="20rem"
      flexDirection="column"
      borderRadius={4}
      border="weak"
      bgColor="white"
      py={3}
      color="white"
      filter="popover"
      outline="none"
      transition="box-shadow 150ms ease-in, border-color 150ms ease-in"
      overflow="auto"
      {...props}
      state={state}
    />
  );
};

export type { SelectPopoverProps };
export { SelectPopover };
