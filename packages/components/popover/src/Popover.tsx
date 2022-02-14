import React, { forwardRef } from 'react';

import {
  AriakitPopover,
  AriakitPopoverArrow,
  AriakitPopoverProps,
} from '@real-system/ariakit-library';
import { Button } from '@real-system/button';
import { Flex, FlexProps } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { RealSystemElementProps } from '@real-system/types-library';
import { makeTestId } from '@real-system/utils-library';

import {
  PopoverDescription,
  PopoverDismiss,
  PopoverHeading,
} from './components';
import { PopoverButton } from './PopoverButton';
import { PopoverContainer, usePopoverStateContext } from './PopoverContext';

type PopoverProps = Omit<AriakitPopoverProps, 'state' | 'as'> &
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

export interface PopoverComponent
  extends React.ForwardRefExoticComponent<PopoverProps> {
  Container: typeof PopoverContainer;
  Dismiss: typeof PopoverDismiss;
  Button: typeof PopoverButton;
  Heading: typeof PopoverHeading;
  Description: typeof PopoverDescription;
}

// @ts-expect-error Popover subcomponent properties are defined on the fn object after this is defined
const Popover: PopoverComponent = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    { children, dataTestid, hideCloseButton, ...restProps }: PopoverProps,
    ref
  ) {
    const state = usePopoverStateContext();
    return (
      <AriakitPopover
        state={state}
        data-testid={makeTestId(dataTestid || 'popover')}
        {...restProps}
        as={StyledPopover}
        ref={ref}>
        <AriakitPopoverArrow state={state} />
        {!hideCloseButton && (
          <PopoverDismiss
            variant="floating"
            position="absolute"
            top={5}
            right={5}>
            <Icon icon="x" />
          </PopoverDismiss>
        )}
        {children}
      </AriakitPopover>
    );
  }
);

Popover.Button = PopoverButton;
Popover.Container = PopoverContainer;
Popover.Description = PopoverDescription;
Popover.Dismiss = PopoverDismiss;
Popover.Heading = PopoverHeading;

export type { PopoverProps };
export { Popover };
