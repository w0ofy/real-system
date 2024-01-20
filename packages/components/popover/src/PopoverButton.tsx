import React, { forwardRef, useCallback } from 'react';

import type { ButtonProps } from '@real-system/button';
import { Button } from '@real-system/button';
import { PopoverDisclosurePrimitive } from '@real-system/popover-primitive';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverStoreContext } from './PopoverContext';

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

type PopoverButtonProps = Omit<ButtonProps, 'onClick' | 'as'> &
  ConditionalProps;

const PopoverButton = forwardRef<HTMLButtonElement, PopoverButtonProps>(
  function PopoverButton(
    { children, onShow, onHide, onToggle, ...restProps },
    ref
  ) {
    const { show, toggle, hide, ...restState } = usePopoverStoreContext();
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

    const store = {
      ...restState,
      show: handleShow,
      hide: handleHide,
      toggle: handleToggle,
    };

    return (
      <PopoverDisclosurePrimitive
        render={(htmlProps) => <Button {...htmlProps} {...restProps} />}
        store={store}
        data-testid={makeTestId('popover-disclosure')}
        ref={ref}>
        {children}
      </PopoverDisclosurePrimitive>
    );
  }
);

export type { PopoverButtonProps };
export { PopoverButton };
