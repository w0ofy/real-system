import React, { useCallback } from 'react';

import type {
  PopoverStorePrimitive,
  PopoverStorePrimitiveProps,
} from '@real-system/popover-primitive';
import { usePopoverStorePrimitive } from '@real-system/popover-primitive';
import { constate } from '@real-system/state-library';

type CustomPopoverStore = {
  onHide?: () => void;
};
type PopoverContext = {
  store: PopoverStorePrimitive;
};

type PopoverContainerProps = Pick<PopoverStorePrimitiveProps, 'placement'> & {
  children: React.ReactNode;
} & CustomPopoverStore;

const usePopover = ({ store }: PopoverContext): PopoverStorePrimitive => store;

const [PopoverContextProvider, usePopoverStoreContext] = constate(usePopover);

const PopoverContainer = ({
  children,
  onHide,
  placement = 'bottom-end',
}: PopoverContainerProps) => {
  const { hide, ...restState } = usePopoverStorePrimitive({
    placement,
  });
  const handleHide = useCallback(() => {
    onHide && onHide();
    hide();
  }, [hide, onHide]);

  const store = {
    ...restState,
    hide: handleHide,
  };

  return (
    <PopoverContextProvider store={store}>{children}</PopoverContextProvider>
  );
};

export type { PopoverContainerProps, PopoverContext };
export { PopoverContainer, usePopoverStoreContext };
