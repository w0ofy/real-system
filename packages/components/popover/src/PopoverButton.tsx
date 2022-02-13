import React, { forwardRef } from 'react';

import { AriaPopoverDisclosure } from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverContext } from './PopoverContext';

type PopoverButtonProps = ButtonProps;

const PopoverButton = forwardRef<HTMLButtonElement, PopoverButtonProps>(
  function PopoverButton({ children, ...restProps }, ref) {
    const state = usePopoverContext();

    return (
      <AriaPopoverDisclosure
        as={Button}
        state={state}
        data-testid={makeTestId('popover-disclosure')}
        {...restProps}
        ref={ref}>
        {children}
      </AriaPopoverDisclosure>
    );
  }
);

export type { PopoverButtonProps };
export { PopoverButton };
