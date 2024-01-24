import React, { forwardRef } from 'react';

import { PopoverHeadingPrimitive } from '@real-system/popover-primitive';
import type { HeadingProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

const StyledHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function StyledHeading(props, ref) {
    return <Text.Heading {...props} as="h1" size="h4" ref={ref} />;
  }
);

type PopoverHeadingProps = Omit<HeadingProps, 'as' | 'variant'>;

const PopoverHeading = forwardRef<HTMLHeadingElement, PopoverHeadingProps>(
  function PopoverHeading({ children, ...restProps }, ref) {
    return (
      <PopoverHeadingPrimitive
        render={(htmlProps) => <StyledHeading {...htmlProps} {...restProps} />}
        data-testid={makeTestId('popover-heading')}
        {...restProps}
        ref={ref}>
        {children}
      </PopoverHeadingPrimitive>
    );
  }
);

export type { PopoverHeadingProps };
export { PopoverHeading };
