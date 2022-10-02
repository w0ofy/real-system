import React, { forwardRef } from 'react';

import {
  AriaCheckboxGroupProps,
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/a11y-library';
import { useFieldControl } from '@real-system/field';
import { Flex } from '@real-system/flex';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { CheckboxGroupContextProvider } from './Checkbox.context';
import { CustomProps } from './Checkbox.model';
import { CheckboxGroupItem } from './CheckboxGroupItem';

type CheckboxGroupProps = AriaCheckboxGroupProps & CustomProps;

export interface CheckboxGroupComponent
  extends React.ForwardRefExoticComponent<CheckboxGroupProps> {
  Item: typeof CheckboxGroupItem;
}

/**
 * @todo break out label api + integrate field api
 * @description CheckboxGroup component.
 */
// @ts-expect-error Item (component) property is defined on the fn object after this is defined
const CheckboxGroup: CheckboxGroupComponent = forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(function CheckboxGroup(props, ref) {
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);
  const {
    children,
    helpText: helpTextProp,
    validation: validationProp,
    required: requiredProp,
    canSelectAll,
    orientation,
  } = props;

  const { validation, helpText, required } = useFieldControl({
    labelProps,
    validation: validationProp,
    helpText: helpTextProp,
    required: requiredProp,
  });

  return (
    <Flex
      vertical
      {...groupProps}
      data-testid={makeTestId('checkbox-group')}
      ref={ref}>
      <Text.Label
        as="legend"
        marginBottom={helpText ? 2 : 6}
        required={required}
        cursor="default"
        {...labelProps}>
        {props.label}
      </Text.Label>
      {helpText && <Text.Help marginBottom={7}>{helpText}</Text.Help>}
      <Flex
        vertical={orientation === 'vertical' ? true : false}
        xAlignContent="left"
        yAlignContent={orientation === 'vertical' ? 'top' : 'center'}>
        <CheckboxGroupContextProvider
          state={{ ...state, validation, canSelectAll, orientation }}>
          {children}
        </CheckboxGroupContextProvider>
      </Flex>
      {validation.hasError && validation.errorMessage && (
        <Text.Help
          mt={3}
          ml={canSelectAll ? 11 : 4}
          variant="danger"
          marginBottom={8}>
          {validation.errorMessage}
        </Text.Help>
      )}
    </Flex>
  );
});

CheckboxGroup.Item = CheckboxGroupItem;
CheckboxGroup.defaultProps = { orientation: 'vertical' };

export type { CheckboxGroupProps };
export { CheckboxGroup };
