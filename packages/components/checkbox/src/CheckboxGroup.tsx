import React from 'react';

import { Flex } from '@real-system/flex';
import {
  Aria_AriaCheckboxGroupProps,
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/react-aria';
import { Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils';

import { CheckboxGroupContextProvider } from './CheckboxContext';

type CheckboxGroupProps = Aria_AriaCheckboxGroupProps & {
  children: React.ReactNode;
};

function CheckboxGroup({ children, ...restProps }: CheckboxGroupProps) {
  const state = useCheckboxGroupState(restProps);
  const { groupProps, labelProps } = useCheckboxGroup(restProps, state);

  return (
    <Flex vertical {...groupProps} data-testid={makeTestId('checkbox-group')}>
      <Label as="legend" {...labelProps}>
        {restProps.label}
      </Label>
      <CheckboxGroupContextProvider value={state}>
        {children}
      </CheckboxGroupContextProvider>
    </Flex>
  );
}

export { CheckboxGroup };
