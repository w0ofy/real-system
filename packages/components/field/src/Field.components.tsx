import * as React from 'react';

import { Flex, FlexProps } from '@real-system/flex';
import type { HelperTextProps, LabelProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldControl } from './FieldControlContext';

type FieldAreaProps = FlexProps;

/**
 * An absatracted `Flex` component to easily group content within a Field.
 * Flex will render a `span` element and all `FlexProps` are accepted.
 */
const FieldArea = React.forwardRef<HTMLSpanElement, FieldAreaProps>(
  function FieldArea({ children, ...restProps }, ref) {
    return (
      <Flex
        data-testid={makeTestId('field-area')}
        as="span"
        vertical
        {...restProps}
        ref={ref}>
        {children}
      </Flex>
    );
  }
);

type FieldGroupProps = FlexProps;
/**
 * A flex wrapper for multiple Fields.
 */
const FieldGroup = ({ children, inline, ...restProps }: FieldGroupProps) => {
  const maybeInline = inline ? {} : { vertical: true };
  return (
    <Flex
      {...maybeInline}
      space={8}
      data-testid={makeTestId('field-group')}
      {...restProps}>
      {children}
    </Flex>
  );
};

type FieldHelperTextProps = HelperTextProps;
/**
 * Helper text for Field. Used to display error messages for fields as well.
 */
const FieldHelperText = React.forwardRef<HTMLSpanElement, FieldHelperTextProps>(
  function FieldHelperText({ children, ...restProps }, ref) {
    const { invalid } = useFieldControl(restProps);
    return (
      <Text.HelperText
        data-testid={makeTestId('field-helper-text')}
        {...restProps}
        invalid={invalid}
        ref={ref}>
        {children}
      </Text.HelperText>
    );
  }
);

type FieldLabelProps = LabelProps;

/**
 * A label for Field
 */
const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  function FieldLabel({ children, htmlFor, ...restProps }, ref) {
    const { required, disabled } = useFieldControl(restProps);
    return (
      <Text.Label
        data-testid={makeTestId('field-label')}
        htmlFor={htmlFor}
        required={required}
        disabled={disabled}
        whiteSpace="nowrap"
        {...restProps}
        ref={ref}>
        {children}
      </Text.Label>
    );
  }
);

export type {
  FieldAreaProps,
  FieldGroupProps,
  FieldHelperTextProps,
  FieldLabelProps,
};
export { FieldArea, FieldGroup, FieldHelperText, FieldLabel };
