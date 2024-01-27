import React, { forwardRef } from 'react';

import type { UseInteractionsReturnValue } from '@real-system/a11y-library';
import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { Text } from '@real-system/typography';
import type { ValidationProps } from '@real-system/utils-library';

type CheckboxWrapperProps = {
  children: React.ReactNode;
  disabled?: boolean;
  helpText?: string;
} & UseInteractionsReturnValue &
  Pick<ValidationProps, 'hasError'>;

/** @todo error message */
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
    hasError,
    isFocusedWithin: _,
    isHovered: __,
    isPressed: ___,
    setFocusedWithin: ____,
    ...restProps
  },
  ref
) {
  return (
    <Flex inline vertical {...restProps}>
      <Text.Label
        display="inline-flex"
        ref={ref}
        disabled={disabled}
        {...hoverProps}
        {...pressProps}
        {...focusWithinProps}>
        <Flex as="span" xAlignContent="center" yAlignContent="center">
          {children}
        </Flex>
      </Text.Label>
      {(helpText || hasError) && (
        <Text.Help
          mt={1}
          marginLeft={13}
          variant={hasError ? 'danger' : 'default'}>
          {helpText}
        </Text.Help>
      )}
    </Flex>
  );
});

export { CheckboxWrapper };
