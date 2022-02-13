import React, { forwardRef } from 'react';

import {
  AriaPopoverDescription,
  AriaPopoverDismiss,
  AriaPopoverHeading,
} from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import {
  HeadingProps,
  Typography,
  TypographyProps,
} from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverContext } from './PopoverContext';

const PopoverDescription = forwardRef<HTMLParagraphElement, TypographyProps>(
  function PopoverDescription({ children, ...restProps }, ref) {
    return (
      <AriaPopoverDescription
        as={Typography}
        data-testid={makeTestId('popover-description')}
        {...restProps}
        ref={ref}>
        {children}
      </AriaPopoverDescription>
    );
  }
);

const StyledHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function StyledHeading(props, ref) {
    return (
      <Typography.Heading {...props} as="h1" variant="heading4" ref={ref} />
    );
  }
);

const PopoverHeading = forwardRef<
  HTMLHeadingElement,
  Omit<HeadingProps, 'as' | 'variant'>
>(function PopoverHeading({ children, ...restProps }, ref) {
  return (
    <AriaPopoverHeading
      as={StyledHeading}
      data-testid={makeTestId('popover-heading')}
      {...restProps}
      ref={ref}>
      {children}
    </AriaPopoverHeading>
  );
});

const PopoverDismiss = forwardRef<HTMLButtonElement, ButtonProps>(
  function PopoverDismiss({ children, ...restProps }, ref) {
    const state = usePopoverContext();
    return (
      <AriaPopoverDismiss
        state={state}
        as={Button}
        data-testid={makeTestId('popover-dismiss')}
        {...restProps}
        ref={ref}>
        {children}
      </AriaPopoverDismiss>
    );
  }
);

export { PopoverDescription, PopoverDismiss, PopoverHeading };
