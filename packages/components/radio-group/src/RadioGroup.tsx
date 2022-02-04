import * as React from 'react';
import { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import {
  useRadioGroup,
  useRadioGroupState,
} from '@real-system/react-aria-library';
import { HelpText, Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { Radio } from './Radio';
import { RadioGroupContextProvider } from './RadioContext';
import type { RadioGroupProps } from './types';
import { restoreRadioGroupProps } from './utils';

export interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<RadioGroupProps> {
  Radio: typeof Radio;
}

// @ts-expect-error Radio (component) property is defined on the fn object after this is defined
const RadioGroup: RadioGroupComponent = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(function RadioGroup(props, ref) {
  const restoredProps = restoreRadioGroupProps(props);
  const state = useRadioGroupState(restoredProps);
  const { radioGroupProps, labelProps } = useRadioGroup(restoredProps, state);
  const { errorText, label, helpText, isRequired, children, orientation } =
    restoredProps;

  return (
    <Flex
      vertical
      {...radioGroupProps}
      data-testid={makeTestId('checkbox-group')}
      ref={ref}>
      <Label
        as="legend"
        required={isRequired}
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
      <Flex vertical={orientation === 'vertical' ? true : false}>
        <RadioGroupContextProvider state={{ ...state, orientation, errorText }}>
          {children}
        </RadioGroupContextProvider>
      </Flex>
      {errorText && <HelpText errorText={errorText} mb={8} />}
    </Flex>
  );
});

RadioGroup.Radio = Radio;
RadioGroup.defaultProps = { orientation: 'vertical' };

export type { RadioGroupProps };
export { RadioGroup };
