/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

import {
  FieldErrorText,
  FieldGroup,
  FieldHelpText,
  FieldLabel,
  FieldWarningText,
} from './components';
import { FieldControlOptions, FieldControlProvider } from './FieldControl';

type FieldProps = Omit<FlexProps, 'children'> &
  FieldControlOptions &
  Pick<FlexProps, 'children'>;

export interface FieldComponent
  extends React.ForwardRefExoticComponent<FieldProps> {
  Label: typeof FieldLabel;
  Help: typeof FieldHelpText;
  Group: typeof FieldGroup;
  Error: typeof FieldErrorText;
  Warning: typeof FieldWarningText;
}

/**
 * @description A flex-ible field context wrapper for field children.
 */
// @ts-expect-error Field component properties are defined on the fn object after this is defined
const Field: FieldComponent = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {
      children,
      validation = {},
      required,
      id,
      label,
      helpText,
      ...restProps
    } = props;
    const fieldControl = {
      validation,
      required,
      helpText,
      id,
      label,
    };

    console.log(id);
    return (
      <FieldControlProvider {...fieldControl}>
        <Flex
          vertical
          xAlignContent="left"
          data-testid={makeTestId('field')}
          gap={2}
          ref={ref}
          {...restProps}>
          {children}
        </Flex>
      </FieldControlProvider>
    );
  }
);

Field.Group = FieldGroup;
Field.Help = FieldHelpText;
Field.Label = FieldLabel;
Field.Error = FieldErrorText;
Field.Warning = FieldErrorText;

export type { FieldProps };
export { Field };
