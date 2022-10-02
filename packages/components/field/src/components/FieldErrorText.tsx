import React from 'react';

import type { HelpTextProps, InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldControl } from '../FieldControl';

type FieldErrorTextProps = Omit<HelpTextProps, 'hideIcon'> & {
  invalid?: InvalidConfig;
};

/**
 * @name Field.ErrorText
 * @description A modified `Text.Help` for `Field` components.
 */
const FieldErrorText = React.forwardRef<HTMLSpanElement, FieldErrorTextProps>(
  function FieldErrorText({ children, ...restProps }, ref) {
    const { validation } = useFieldControl();

    if (!validation?.hasError) return null;

    return (
      <Text.Help
        testId={makeTestId('field-error-text')}
        variant="danger"
        {...restProps}
        ref={ref}>
        {validation?.errorMessage || children}
      </Text.Help>
    );
  }
);

export type { FieldErrorTextProps };
export { FieldErrorText };
