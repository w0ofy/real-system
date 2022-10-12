import React from 'react';

import type { LabelProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldControl } from '../FieldControl';

type FieldLabelProps = LabelProps;

/**
 * @name Field.Label
 * @description An modified `Text.Label` for `Field` components.
 */
const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  function FieldLabel({ children, ...restProps }, ref) {
    const { labelProps, required, label } = useFieldControl();

    return (
      <Text.Label
        testId={makeTestId('field-label')}
        required={required}
        whiteSpace="nowrap"
        {...restProps}
        {...labelProps}
        ref={ref}>
        {label || children}
      </Text.Label>
    );
  }
);

export type { FieldLabelProps };
export { FieldLabel };
