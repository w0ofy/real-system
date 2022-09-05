import React, { forwardRef } from 'react';

import type { UseInteractionsReturnValue } from '@real-system/a11y-library';
import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import type { InvalidConfig } from '@real-system/typography';
import { HelperText, Label } from '@real-system/typography';

type CheckboxWrapperProps = {
  children: React.ReactNode;
  disabled?: boolean;
  helpText?: string;
  invalid?: InvalidConfig;
} & UseInteractionsReturnValue;

const CheckboxWrapper = forwardRef<
  HTMLLabelElement,
  CheckboxWrapperProps & FlexProps
>(function CheckboxWrapper(
  {
    children,
    disabled,
    hoverProps,
    pressProps,
    focusWithinProps,
    helpText,
    invalid,
    ...restProps
  },
  ref
) {
  return (
    <Flex inline vertical {...restProps}>
      <Label
        display="inline-flex"
        ref={ref}
        disabled={disabled}
        {...hoverProps}
        {...pressProps}
        {...focusWithinProps}>
        <Flex as="span" xAlignContent="center" yAlignContent="center">
          {children}
        </Flex>
      </Label>
      {(helpText || invalid) && (
        <HelperText mt={2} marginLeft={12} invalid={invalid}>
          {helpText}
        </HelperText>
      )}
    </Flex>
  );
});

export { CheckboxWrapper };
