import React from 'react';

import type { LabelProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldContext } from '../Field.context';

type FieldLabelProps = LabelProps;

/**
 * @description An modified `Text.Label` for `Field` components.
 */
const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  function FieldLabel({ children, ...restProps }, ref) {
    const { id, required, labelProps } = useFieldContext();

    return (
      <Text.Label
        testId={makeTestId('field-label')}
        htmlFor={id}
        required={required}
        whiteSpace="nowrap"
        {...labelProps}
        {...restProps}
        ref={ref}>
        {children}
      </Text.Label>
    );
  }
);

export type { FieldLabelProps };
export { FieldLabel };
