import React from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

import { FieldControlOptions, FieldProvider } from './Field.context';
import { FieldGroup } from './FieldGroup';
import { FieldHelperText } from './FieldHelperText';
import { FieldLabel } from './FieldLabel';

type FieldProps = FlexProps & FieldControlOptions;
/**
 *
 * @todo possibly add FieldControl and FieldGroupControl for easy-to-use field context
 */

export interface FieldComponent
  extends React.ForwardRefExoticComponent<FieldProps> {
  Label: typeof FieldLabel;
  HelperText: typeof FieldHelperText;
  Group: typeof FieldGroup;
}

/**
 * @description A flex-ible field context wrapper for field children.
 */
// @ts-expect-error Field component properties are defined on the fn object after this is defined
const Field: FieldComponent = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(
    { children, invalid, required, disabled, id, readOnly, ...restProps },
    ref
  ) {
    return (
      <FieldProvider
        value={{ invalid: invalid!, required, disabled, id: id!, readOnly }}>
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

export type { FieldProps };
export { Field };
