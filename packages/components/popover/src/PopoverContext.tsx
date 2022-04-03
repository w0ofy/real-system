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

type PopoverContainerProps = Pick<
  AriakitPopoverStateProps,
  'placement' | 'flip'
> & {
  children: React.ReactNode;
} & CustomPopoverState;

const usePopover = ({ state }: PopoverContext): AriakitPopoverState => state;

const [PopoverContextProvider, usePopoverStateContext] = constate(usePopover);

const maybeAutoPlacements = (
  placement: PopoverContainerProps['placement'],
  flip
) => {
  if (
    placement === 'auto' ||
    placement === 'auto-end' ||
    placement === 'auto-start'
  ) {
    return true;
  }
  return flip;
};

const PopoverContainer = ({
  children,
  onHide,
  placement = 'auto',
  flip = true,
}: PopoverContainerProps) => {
  const { hide, ...restState } = useAriakitPopoverState({
    placement,
    gutter: 2,
    flip: maybeAutoPlacements(placement, flip),
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
