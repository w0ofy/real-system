/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

import type { FieldWarningText } from './components';
import {
  FieldErrorText,
  FieldGroup,
  FieldHelpText,
  FieldLabel,
} from './components';
import type { FieldControlOptions } from './FieldControl';
import { FieldControlProvider } from './FieldControl';

type FieldProps = FlexProps & FieldControlOptions & { as?: 'fieldset' | 'div' };

export interface FieldComponent
  extends React.ForwardRefExoticComponent<FieldProps> {
  Label: typeof FieldLabel;
  Help: typeof FieldHelpText;
  Group: typeof FieldGroup;
  Error: typeof FieldErrorText;
  Warning: typeof FieldWarningText;
}

/**
 * @deprecated DO NOT USE — Under heavy construction
 * @todo API design
 */
// @ts-expect-error Field component properties are defined on the fn object after this is defined
const Field: FieldComponent = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {
      children,
      required,
      id,
      label,
      helpText,
      hasError,
      warningMessage,
      errorMessage,
      as = 'div',
      ...restProps
    } = props;
    const fieldControl = {
      required,
      helpText,
      id,
      label,
      hasError,
      warningMessage,
      errorMessage,
    };

    return (
      <FieldControlProvider {...fieldControl}>
        <Flex
          vertical
          xAlignContent="left"
          data-testid={makeTestId('field')}
          gap={2}
          ref={ref}
          role="group"
          as={as}
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
