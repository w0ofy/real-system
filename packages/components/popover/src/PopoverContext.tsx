import React, { useCallback } from 'react';

import {
  PopoverStatePrimitive,
  PopoverStatePrimitiveProps,
  usePopoverStatePrimitive,
} from '@real-system/popover-primitive';
import { constate } from '@real-system/state-library';

type CustomPopoverState = {
  onHide?: () => void;
};
type PopoverContext = {
  state: PopoverStatePrimitive;
};

type PopoverContainerProps = Pick<
  PopoverStatePrimitiveProps,
  'placement' | 'flip'
> & {
  children: React.ReactNode;
} & CustomPopoverState;

const usePopover = ({ state }: PopoverContext): PopoverStatePrimitive => state;

const [PopoverContextProvider, usePopoverStateContext] = constate(usePopover);

const PopoverContainer = ({
  children,
  onHide,
  placement = 'bottom-end',
  flip = true,
}: PopoverContainerProps) => {
  const { hide, ...restState } = usePopoverStatePrimitive({
    placement,
    gutter: 2,
    flip,
  });
  const handleHide = useCallback(() => {
    onHide && onHide();
    hide();
  }, [hide, onHide]);

  const state = {
    ...restState,
    hide: handleHide,
  };

  return (
    <PopoverContextProvider state={state}>{children}</PopoverContextProvider>
  );
};

export type { PopoverContainerProps, PopoverContext };
export { PopoverContainer, usePopoverStateContext };
