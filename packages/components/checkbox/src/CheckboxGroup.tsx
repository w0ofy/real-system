import React, { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import {
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/react-aria-library';
import { HelpText, Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { CheckboxGroupContextProvider } from './CheckboxContext';
import { CheckboxGroupItem } from './CheckboxGroupItem';
import { CheckboxGroupProps } from './types';
import { restoreCheckboxGroupProps } from './utils';

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
  const restoredProps = restoreCheckboxGroupProps(props);
  const state = useCheckboxGroupState(restoredProps);
  const { groupProps, labelProps } = useCheckboxGroup(restoredProps, state);
  const { children, helpText, errorText, required, canSelectAll, orientation } =
    restoredProps;

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
        {restoredProps.label}
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
