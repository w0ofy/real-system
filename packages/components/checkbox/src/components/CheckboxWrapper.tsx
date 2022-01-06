import React, { forwardRef } from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { HelpText, Label } from '@real-system/typography';

import type { UseInteractionsReturnValue } from '../utils';

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
    ...restProps
  },
  ref
) {
  return (
    <Flex inline vertical _notLast={{ mb: 5 }} {...restProps}>
      <Label
        ref={ref}
        display="inline-flex"
        disabled={disabled}
        {...hoverProps}
        {...pressProps}
        {...focusWithinProps}>
        <Flex as="span" xAlignContent="center" yAlignContent="center">
          {children}
        </Flex>
      </Label>
      {helpText && (
        <HelpText mt={2} ml={12}>
          {helpText}
        </HelpText>
      )}
    </Flex>
  );
});

export { CheckboxWrapper };
