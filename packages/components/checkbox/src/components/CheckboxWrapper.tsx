import React, { forwardRef } from 'react';

import type { UseInteractionsReturnValue } from '@real-system/a11y-library';
import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { HelpText, Label } from '@real-system/typography';

type CheckboxWrapperProps = {
  children: React.ReactNode;
  disabled?: boolean;
  helpText?: string;
  errorText?: string;
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
    errorText,
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
      {(helpText || errorText) && (
        <HelpText marginTop={2} marginLeft={14} errorText={errorText}>
          {helpText}
        </HelpText>
      )}
    </Flex>
  );
});

export { CheckboxWrapper };
