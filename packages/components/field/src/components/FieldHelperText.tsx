import React from 'react';

import type { HelperTextProps, InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

type FieldHelperTextProps = Omit<
  HelperTextProps,
  'invalid' | 'hideInvalidIcon'
>;

/**
 * @description An modified `Text.Helper` for `Field` components.
 */
const FieldHelperText = React.forwardRef<HTMLSpanElement, FieldHelperTextProps>(
  function FieldHelperText({ children, ...restProps }, ref) {
    return (
      <Text.Helper
        testId={makeTestId('field-helper-text')}
        {...restProps}
        ref={ref}>
        {children}
      </Text.Helper>
    );
  }
);

export type { FieldHelperTextProps };
export { FieldHelperText };
