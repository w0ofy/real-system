import React, { forwardRef } from 'react';

import {
  AriaPopoverDescription,
  AriaPopoverDismiss,
  AriaPopoverHeading,
} from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import {
  Heading,
  HeadingProps,
  Typography,
  TypographyProps,
} from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { usePopoverContext } from './PopoverContext';

const PopoverDescription = ({ children, ...restProps }: TypographyProps) => (
  <AriaPopoverDescription
    as={Typography}
    data-testid={makeTestId('popover-description')}
    {...restProps}>
    {children}
  </AriaPopoverDescription>
);

const StyledHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function StyledHeading(props, ref) {
    return <Heading {...props} as="h1" variant="heading4" ref={ref} />;
  }
);

const PopoverHeading = ({
  children,
  ...restProps
}: Omit<HeadingProps, 'as' | 'variant'>) => (
  <AriaPopoverHeading
    as={StyledHeading}
    data-testid={makeTestId('popover-heading')}
    {...restProps}>
    {children}
  </AriaPopoverHeading>
);

const PopoverDismiss = ({ children, ...restProps }: ButtonProps) => {
  const state = usePopoverContext();
  return (
    <AriaPopoverDismiss
      state={state}
      as={Button}
      data-testid={makeTestId('popover-dismiss')}
      {...restProps}>
      {children}
    </AriaPopoverDismiss>
  );
};
export { PopoverDescription, PopoverDismiss, PopoverHeading };
