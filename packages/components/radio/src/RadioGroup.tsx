import * as React from 'react';
import { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import {
  useRadioGroup,
  useRadioGroupState,
} from '@real-system/react-aria-library';
import { HelpText, Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { RadioGroupContextProvider } from './RadioContext';

type RadioGroupProps = {
  errorText?: string;
  helpText?: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

/**
 * @todo add orientation controls
 * @todo sanitize props
 */
const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(props, ref) {
    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps } = useRadioGroup(props, state);
    const { errorText, children, label, helpText, required } = props;

    return (
      <Flex
        vertical
        {...radioGroupProps}
        data-testid={makeTestId('checkbox-group')}
        ref={ref}>
        <Label
          as="legend"
          required={required}
          mb={helpText ? 2 : 6}
          cursor="default"
          {...labelProps}>
          {label}
        </Label>
        {helpText && (
          <HelpText mt={0} mb={6}>
            {helpText}
          </HelpText>
        )}
        <RadioGroupContextProvider state={{ ...state, errorText }}>
          {children}
        </RadioGroupContextProvider>
        {errorText && <HelpText errorText={errorText} mb={8} />}
      </Flex>
    );
  }
);

export { RadioGroup };
