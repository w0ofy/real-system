import React, { useCallback } from 'react';

import {
  AriakitPopoverState,
  AriakitPopoverStateProps,
  useAriakitPopoverState,
} from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type CustomPopoverState = {
  onHide?: () => void;
};
type PopoverContext = {
  state: AriakitPopoverState;
};

type PopoverContainerProps = Pick<AriakitPopoverStateProps, 'placement'> & {
  children: React.ReactNode;
} & CustomPopoverState;

const usePopover = ({ state }: PopoverContext): AriakitPopoverState => state;

const [PopoverContextProvider, usePopoverStateContext] = constate(usePopover);

const PopoverContainer = ({
  children,
  onHide,
  placement,
}: PopoverContainerProps) => {
  const { hide, ...restState } = useAriakitPopoverState({
    placement,
    gutter: 2,
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
