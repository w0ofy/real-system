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
import { restoreCheckboxGroupProps } from './utils';

type CheckboxGroupProps = Aria_AriaCheckboxGroupProps & {
  children: React.ReactNode;
};

function CheckboxGroup({ children, ...passedProps }: CheckboxGroupProps) {
  const props = restoreCheckboxGroupProps(passedProps);
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <Flex vertical {...groupProps} data-testid={makeTestId('checkbox-group')}>
      <Label as="legend" {...labelProps}>
        {props.label}
      </Label>
      <CheckboxGroupContextProvider state={state}>
        {children}
      </CheckboxGroupContextProvider>
    </Flex>
  );
}

export { CheckboxGroup };
