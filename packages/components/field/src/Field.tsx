/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

import {
  FieldErrorText,
  FieldGroup,
  FieldHelperText,
  FieldLabel,
} from './components';
import { FieldControlOptions, FieldProvider } from './Field.context';

type FieldProps = FlexProps & FieldControlOptions;

export interface FieldComponent
  extends React.ForwardRefExoticComponent<FieldProps> {
  Label: typeof FieldLabel;
  HelperText: typeof FieldHelperText;
  Group: typeof FieldGroup;
  ErrorText: typeof FieldErrorText;
}

/**
 * @description A flex-ible field context wrapper for field children.
 */
// @ts-expect-error Field component properties are defined on the fn object after this is defined
const Field: FieldComponent = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(
    {
      children,
      invalid,
      required,
      disabled,
      id,
      readonly,
      labelProps,
      inputProps,
      ...restProps
    },
    ref
  ) {
    return (
      <FieldProvider
        value={{
          invalid: invalid!,
          required,
          disabled,
          id: id!,
          readonly,
          labelProps: labelProps!,
          inputProps: inputProps!,
        }}>
        <Flex
          vertical
          xAlignContent="left"
          data-testid={makeTestId('field')}
          gap={2}
          ref={ref}
          {...restProps}>
          {children}
        </Flex>
      </FieldProvider>
    );
  }
);

Field.Group = FieldGroup;
Field.HelperText = FieldHelperText;
Field.Label = FieldLabel;
Field.ErrorText = FieldErrorText;

export type { FieldProps };
export { Field };
