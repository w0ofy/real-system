import React from 'react';

import { real } from '@real-system/elements-primitive';
import type { SelectPopoverPrimitiveProps } from '@real-system/select-primitive';
import {
  SelectArrowPrimitive,
  SelectPopoverPrimitive,
} from '@real-system/select-primitive';

import type { OmitSelectPrivateProps } from './types';

type SelectPopoverProps = OmitSelectPrivateProps<SelectPopoverPrimitiveProps>;

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
          px={4}
          opacity="0"
          transition="opacity .2s ease-in-out"
          _enter={{ opacity: 1 }}
          color="white"
          filter="popover"
          outline="none"
          overflow="auto"
        />
      }
      {...restProps}>
      <SelectArrowPrimitive size={0} />
      {children}
    </SelectPopoverPrimitive>
  );
};

export type { SelectPopoverProps };
export { SelectPopover };
