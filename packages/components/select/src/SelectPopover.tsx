import React from 'react';

import { real } from '@real-system/elements-primitive';
import type { SelectPopoverPrimitiveProps } from '@real-system/select-primitive';
import { SelectPopoverPrimitive } from '@real-system/select-primitive';

import type { OmitSelectPrivateProps } from './types';

type SelectPopoverProps = OmitSelectPrivateProps<SelectPopoverPrimitiveProps>;

/**
 * @todo animate popover
 */
const SelectPopover = ({
  children,
  sameWidth = true,
  ...restProps
}: SelectPopoverProps) => {
  return (
    <SelectPopoverPrimitive
      sameWidth={sameWidth}
      gutter={4}
      render={
        <real.span
          zIndex="popover"
          display="flex"
          maxHeight="20rem"
          flexDirection="column"
          borderRadius={4}
          border="weak"
          bgColor="white"
          py={4}
          color="white"
          filter="popover"
          outline="none"
          overflow="auto"
        />
      }
      {...restProps}>
      {children}
    </SelectPopoverPrimitive>
  );
};

export type { SelectPopoverProps };
export { SelectPopover };
