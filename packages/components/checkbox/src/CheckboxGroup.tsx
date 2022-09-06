import React, { forwardRef } from 'react';

import {
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/a11y-library';
import { Flex } from '@real-system/flex';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { CheckboxGroupContextProvider } from './CheckboxContext';
import { CheckboxGroupItem } from './CheckboxGroupItem';
import { CheckboxGroupProps } from './types';

export interface CheckboxGroupComponent
  extends React.ForwardRefExoticComponent<CheckboxGroupProps> {
  Item: typeof CheckboxGroupItem;
}

/**
 * @description CheckboxGroup component.
 */
// @ts-expect-error Item (component) property is defined on the fn object after this is defined
const CheckboxGroup: CheckboxGroupComponent = forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(function CheckboxGroup(props, ref) {
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);
  const { children, helpText, invalid, required, canSelectAll, orientation } =
    props;

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
      {helpText && (
        <Text.HelperText marginBottom={7}>{helpText}</Text.HelperText>
      )}
      <Flex
        vertical={orientation === 'vertical' ? true : false}
        xAlignContent="left"
        yAlignContent={orientation === 'vertical' ? 'top' : 'center'}>
        <CheckboxGroupContextProvider
          state={{ ...state, invalid, canSelectAll, orientation }}>
          {children}
        </CheckboxGroupContextProvider>
      </Flex>
      {invalid && (
        <Text.HelperText
          mt={3}
          ml={canSelectAll ? 11 : 4}
          invalid={invalid}
          marginBottom={8}
        />
      )}
    </Flex>
  );
});

CheckboxGroup.Item = CheckboxGroupItem;
CheckboxGroup.defaultProps = { orientation: 'vertical' };

export type { CheckboxGroupProps };
export { CheckboxGroup };
