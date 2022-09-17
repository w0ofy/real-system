import React from 'react';

import type { DangerTextProps, InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldContext } from '../Field.context';

type FieldErrorTextProps = Omit<
  DangerTextProps,
  'invalid' | 'hideInvalidIcon'
> & {
  invalid?: InvalidConfig;
};

/**
 * @description An modified `Text.Error` for `Field` components.
 */
const FieldErrorText = React.forwardRef<HTMLSpanElement, FieldErrorTextProps>(
  function FieldErrorText({ children, ...restProps }, ref) {
    const { invalid } = useFieldContext();

    if (!invalid?.status) return null;
    return (
      <Text.Error
        testId={makeTestId('field-helper-text')}
        {...restProps}
        ref={ref}>
        {children || invalid?.message}
      </Text.Error>
    );
  }
);

export type { FieldErrorTextProps };
export { FieldErrorText };
