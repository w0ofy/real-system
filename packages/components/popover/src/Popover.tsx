import React, { forwardRef } from 'react';

import {
  AriaPopover,
  AriaPopoverArrow,
  AriaPopoverProps,
} from '@real-system/ariakit-library';
import { Button } from '@real-system/button';
import { Flex, FlexProps } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { RealSystemElementProps } from '@real-system/types-library';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverContext } from './PopoverContext';

type PopoverProps = Omit<AriaPopoverProps, 'state' | 'as'> &
  RealSystemElementProps & {
    hideCloseButton?: boolean;
  };

const StyledPopover = forwardRef<HTMLDivElement, FlexProps>(
  function StyledPopover(props, ref) {
    return (
      <Flex
        maxWidth="45rem"
        {...props}
        vertical
        xAlignContent="left"
        yAlignContent="top"
        border="border-2"
        filter="filter-shadow-neutral-weak-8"
        borderColor="color-border-neutral-weak-8"
        borderRadius={2}
        padding={10}
        _focus={{ outline: '0' }}
        bg="color-background"
        zIndex={1}
        ref={ref}
      />
    );
  }
);

const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  { children, dataTestid, hideCloseButton, ...restProps }: PopoverProps,
  ref
) {
  const state = usePopoverContext();
  return (
    <AriaPopover
      state={state}
      data-testid={makeTestId(dataTestid || 'popover')}
      {...restProps}
      as={StyledPopover}
      ref={ref}>
      <AriaPopoverArrow state={state} />
      {!hideCloseButton && (
        <Button
          onClick={state.hide}
          variant="floating"
          position="absolute"
          top={5}
          right={5}>
          <Icon icon="x" />
        </Button>
      )}
      {children}
    </AriaPopover>
  );
});

export { Popover };
