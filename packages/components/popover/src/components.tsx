import React, { forwardRef, useCallback } from 'react';

import {
  AriakitPopoverDescription,
  AriakitPopoverDismiss,
  AriakitPopoverHeading,
} from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import type { PositionProps } from '@real-system/styling-library';
import {
  HeadingProps,
  Typography,
  TypographyProps,
} from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverStateContext } from './PopoverContext';

type PopoverDescriptionProps = Omit<TypographyProps, 'as'>;

const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(function PopoverDescription({ children, ...restProps }, ref) {
  return (
    <AriakitPopoverDescription
      as={Typography}
      data-testid={makeTestId('popover-description')}
      {...restProps}
      ref={ref}>
      {children}
    </AriakitPopoverDescription>
  );
});

const StyledHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function StyledHeading(props, ref) {
    return (
      <Typography.Heading {...props} as="h1" variant="heading4" ref={ref} />
    );
  }
);

type PopoverHeadingProps = Omit<HeadingProps, 'as' | 'variant'>;

const PopoverHeading = forwardRef<HTMLHeadingElement, PopoverHeadingProps>(
  function PopoverHeading({ children, ...restProps }, ref) {
    return (
      <AriakitPopoverHeading
        as={StyledHeading}
        data-testid={makeTestId('popover-heading')}
        {...restProps}
        ref={ref}>
        {children}
      </AriakitPopoverHeading>
    );
  }
);

type PopoverDismissProps = Pick<
  ButtonProps,
  'variant' | 'intent' | 'children' | 'size'
> & {
  /** Override the `PopoverDismiss` `onClick` callback. If used, you will have
   * to close the popover yourself with the `hide` callback provided by `onDismiss`. */
  onDismiss?: (hide: () => void) => void;
} & PositionProps;

const PopoverDismiss = forwardRef<HTMLButtonElement, PopoverDismissProps>(
  function PopoverDismiss({ children, onDismiss, ...restProps }, ref) {
    const { hide, ...restState } = usePopoverStateContext();
    const handleHide = useCallback(() => {
      if (onDismiss) return onDismiss(hide);
      hide();
    }, [onDismiss, hide]);

    const state = {
      hide: handleHide,
      ...restState,
    };

    return (
      <AriakitPopoverDismiss
        state={state}
        as={Button}
        data-testid={makeTestId('popover-dismiss')}
        {...restProps}
        ref={ref}>
        {children}
      </AriakitPopoverDismiss>
    );
  }
);

export { PopoverDescription, PopoverDismiss, PopoverHeading };
