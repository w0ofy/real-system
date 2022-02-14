import React, { forwardRef, useCallback } from 'react';

import { AriakitPopoverDisclosure } from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverStateContext } from './PopoverContext';

type ConditionalProps =
  | {
      onShow?: (show: () => void) => void;
      onToggle?: never;
      onHide?: (hide: () => void) => void;
    }
  | {
      onShow?: never;
      onToggle?: (toggle: () => void) => void;
      onHide?: never;
    };

type PopoverButtonProps = Pick<
  ButtonProps,
  'variant' | 'intent' | 'children' | 'size'
> &
  ConditionalProps;

const PopoverButton = forwardRef<HTMLButtonElement, PopoverButtonProps>(
  function PopoverButton(
    { children, onShow, onHide, onToggle, ...restProps },
    ref
  ) {
    const { show, toggle, hide, ...restState } = usePopoverStateContext();
    const handleShow = useCallback(() => {
      if (onShow) return onShow(show);
      show();
    }, [show, onShow]);
    const handleHide = useCallback(() => {
      if (onHide) return onHide(hide);
      hide();
    }, [hide, onHide]);
    const handleToggle = useCallback(() => {
      if (onToggle) return onToggle(toggle);
      toggle();
    }, [toggle, onToggle]);

    const state = {
      ...restState,
      show: handleShow,
      hide: handleHide,
      toggle: handleToggle,
    };

    return (
      <AriakitPopoverDisclosure
        as={Button}
        state={state}
        data-testid={makeTestId('popover-disclosure')}
        {...restProps}
        ref={ref}>
        {children}
      </AriakitPopoverDisclosure>
    );
  }
);

export type { PopoverButtonProps };
export { PopoverButton };
