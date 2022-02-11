import React, { forwardRef } from 'react';

import {
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/a11y-library';
import { Flex } from '@real-system/flex';
import { HelpText, Label } from '@real-system/typography';
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
  const { children, helpText, errorText, required, canSelectAll, orientation } =
    props;

  return (
    <Flex
      vertical
      {...groupProps}
      data-testid={makeTestId('checkbox-group')}
      ref={ref}>
      <Label
        as="legend"
        mb={helpText ? 2 : 6}
        required={required}
        cursor="default"
        {...labelProps}>
        {props.label}
      </Label>
      {helpText && (
        <HelpText mt={0} mb={6}>
          {helpText}
        </HelpText>
      )}
      <Flex
        vertical={orientation === 'vertical' ? true : false}
        xAlignContent="left"
        yAlignContent={orientation === 'vertical' ? 'top' : 'center'}>
        <CheckboxGroupContextProvider
          state={{ ...state, errorText, canSelectAll, orientation }}>
          {children}
        </CheckboxGroupContextProvider>
      </Flex>
      {errorText && <HelpText errorText={errorText} mb={8} />}
    </Flex>
  );
});

CheckboxGroup.Item = CheckboxGroupItem;
CheckboxGroup.defaultProps = { orientation: 'vertical' };

export type { CheckboxGroupProps };
export { CheckboxGroup };
