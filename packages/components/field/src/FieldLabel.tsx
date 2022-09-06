import React from 'react';

import type { LabelProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldContext } from './Field.context';

type FieldLabelProps = LabelProps;

/**
 * @description An modified `Text.Label` for `Field` components.
 */
const FieldLabel = ({ children, ...restProps }: FieldLabelProps) => {
  const { id, required } = useFieldContext();

  return (
    <Text.Label
      testId={makeTestId('field-label')}
      htmlFor={id}
      required={required}
      whiteSpace="nowrap"
      {...restProps}>
      {children}
    </Text.Label>
  );
};

export type { FieldLabelProps };
export { FieldLabel };
