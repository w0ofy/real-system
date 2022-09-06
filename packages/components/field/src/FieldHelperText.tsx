import React from 'react';

import type { HelperTextProps, InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldContext } from './Field.context';

type FieldHelperTextProps = Omit<
  HelperTextProps,
  'invalid' | 'hideInvalidIcon'
> & {
  invalid?: InvalidConfig;
};

/**
 * @description An modified `Text.HelperText` for `Field` components.
 */
const FieldHelperText = React.forwardRef<HTMLSpanElement, FieldHelperTextProps>(
  function FieldHelperText({ children, ...restProps }) {
    const { invalid } = useFieldContext();

    return (
      <Text.HelperText
        testId={makeTestId('field-helper-text')}
        invalid={invalid}
        {...restProps}>
        {children}
      </Text.HelperText>
    );
  }
);

export type { FieldHelperTextProps };
export { FieldHelperText };
