import React, { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import {
  useCheckboxGroup,
  useCheckboxGroupState,
} from '@real-system/react-aria-library';
import { HelpText, Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { CheckboxGroupContextProvider } from './CheckboxContext';
import { CheckboxGroupProps } from './types';
import { restoreCheckboxGroupProps } from './utils';

/**
 * @todo add orientation controls
 */
const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  function CheckboxGroup(passedProps, ref) {
    const props = restoreCheckboxGroupProps(passedProps);
    const state = useCheckboxGroupState(props);
    const { groupProps, labelProps } = useCheckboxGroup(props, state);
    const { children, helpText, errorText, required, canSelectAll } = props;

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
        <CheckboxGroupContextProvider
          state={{ ...state, errorText, canSelectAll }}>
          {children}
        </CheckboxGroupContextProvider>
        {errorText && <HelpText errorText={errorText} mb={8} />}
      </Flex>
    );
  }
);

export type { CheckboxGroupProps };
export { CheckboxGroup };
