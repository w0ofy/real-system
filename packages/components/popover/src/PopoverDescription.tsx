import React, { forwardRef } from 'react';

import { AriakitPopoverDescription } from '@real-system/ariakit-library';
import { Text, TextProps } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

type PopoverDescriptionProps = Omit<TextProps, 'as'>;

const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(function PopoverDescription({ children, ...restProps }, ref) {
  return (
    <AriakitPopoverDescription
      as={Text}
      data-testid={makeTestId('popover-description')}
      {...restProps}
      ref={ref}>
      {children}
    </AriakitPopoverDescription>
  );
});

export { PopoverDescription };
