import React, { forwardRef } from 'react';

import { PopoverDescriptionPrimitive } from '@real-system/popover-primitive';
import type { TextProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

type PopoverDescriptionProps = Omit<TextProps, 'as'>;

const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(function PopoverDescription({ children, ...restProps }, ref) {
  return (
    <PopoverDescriptionPrimitive
      render={(htmlProps) => <Text {...htmlProps} {...restProps} />}
      data-testid={makeTestId('popover-description')}
      ref={ref}>
      {children}
    </PopoverDescriptionPrimitive>
  );
});

export type { PopoverDescriptionProps };
export { PopoverDescription };
