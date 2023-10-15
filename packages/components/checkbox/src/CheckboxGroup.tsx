import React, { forwardRef } from 'react';

import type { AriaCheckboxGroupProps } from '@real-system/a11y-library';
import {
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/a11y-library';
import { Flex } from '@real-system/flex';
import { Text } from '@real-system/typography';
import type { ValidationProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { CheckboxGroupContextProvider } from './Checkbox.context';
import type { CustomProps } from './Checkbox.model';
import { CheckboxGroupItem } from './CheckboxGroupItem';

type CheckboxGroupProps = AriaCheckboxGroupProps &
  CustomProps &
  Omit<ValidationProps, 'warningMessage' | 'readonly'>;

export interface CheckboxGroupComponent
  extends React.ForwardRefExoticComponent<CheckboxGroupProps> {
  Item: typeof CheckboxGroupItem;
}

/**
 * @description CheckboxGroup component.
 *
 * @todo ??? remove flex and orientation; improve example on how to wrap with `Stack` or `Flex` or whatever
 * @todo ??? use ariakit library
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
    helpText,
    required,
    hasError,
    canSelectAll,
    orientation,
    errorMessage,
    label,
  } = props;

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
        {label}
      </Text.Label>
      {helpText && <Text.Help marginBottom={7}>{helpText}</Text.Help>}
      <Flex
        vertical={orientation === 'vertical' ? true : false}
        xAlignContent="left"
        yAlignContent={orientation === 'vertical' ? 'top' : 'center'}>
        <CheckboxGroupContextProvider
          state={{
            ...state,
            canSelectAll,
            orientation,
            hasError,
          }}>
          {children}
        </CheckboxGroupContextProvider>
      </Flex>
      {hasError && errorMessage && (
        <Text.Help
          mt={3}
          ml={canSelectAll ? 11 : 4}
          variant="danger"
          marginBottom={8}>
          {errorMessage}
        </Text.Help>
      )}
    </Flex>
  );
});

CheckboxGroup.Item = CheckboxGroupItem;
CheckboxGroup.defaultProps = { orientation: 'vertical' };

export type { CheckboxGroupProps };
export { CheckboxGroup };
