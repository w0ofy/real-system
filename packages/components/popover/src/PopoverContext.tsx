import React from 'react';

import {
  AriaPopoverState,
  AriaPopoverStateProps,
  useAriaPopoverState,
} from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type PopoverContext = {
  state: AriaPopoverState;
};

type PopoverContainerProps = Pick<AriaPopoverStateProps, 'placement'> & {
  children: React.ReactNode;
};

const usePopover = ({ state }: PopoverContext): AriaPopoverState => state;

const [PopoverContextProvider, usePopoverContext] = constate(usePopover);

const PopoverContainer = ({ children, placement }: PopoverContainerProps) => {
  const state = useAriaPopoverState({ placement });
  return (
    <PopoverContextProvider state={state}>{children}</PopoverContextProvider>
  );
};

export type { PopoverContainerProps, PopoverContext };
export { PopoverContainer, usePopoverContext };
