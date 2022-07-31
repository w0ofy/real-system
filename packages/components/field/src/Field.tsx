import * as React from 'react';

import { Flex, FlexProps } from '@real-system/flex';

import {
  FieldArea,
  FieldGroup,
  FieldHelperText,
  FieldLabel,
} from './Field.components';
import {
  FieldControlContext,
  FieldControlProvider,
} from './FieldControlContext';

type FieldProps = FieldControlContext & FlexProps;

interface FieldComponent extends React.ForwardRefExoticComponent<FieldProps> {
  Area: typeof FieldArea;
  Label: typeof FieldLabel;
  HelperText: typeof FieldHelperText;
  Group: typeof FieldGroup;
}
/**
 * @description A Field control area for form components
 *
 * @todo update field API and all of its consumers
 */
// @ts-expect-error Field component properties are defined on the fn object after this is defined
const Field: FieldComponent = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(
    { children, invalid, required, readOnly, disabled, inline, ...restProps },
    ref
  ) {
    const contextValue = {
      invalid,
      required,
      readOnly,
      disabled,
      inline,
    };

    const alignmentProps = React.useMemo(
      () => (inline ? {} : { vertical: true }),
      [inline]
    );

    return (
      <FieldControlProvider value={contextValue}>
        <Flex {...alignmentProps} gap={2} {...restProps} ref={ref}>
          {children}
        </Flex>
      </FieldControlProvider>
    );
  }
);

Field.Area = FieldArea;
Field.Group = FieldGroup;
Field.Label = FieldLabel;
Field.HelperText = FieldHelperText;

export type { FieldProps };
export { Field };
