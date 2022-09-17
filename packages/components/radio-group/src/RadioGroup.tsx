import * as React from 'react';
import { forwardRef } from 'react';

import { useRadioGroup, useRadioGroupState } from '@real-system/a11y-library';
import { useField } from '@real-system/field';
import { Flex } from '@real-system/flex';
import { isFunction, makeTestId } from '@real-system/utils-library';

import { Radio } from './Radio';
import { RadioGroupContextProvider } from './Radio.context';
import type { RadioGroupProps } from './RadioGroup.model';

export interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<RadioGroupProps> {
  Radio: typeof Radio;
}

// @ts-expect-error Radio (component) property is defined on the fn object after this is defined
const RadioGroup: RadioGroupComponent = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(function RadioGroup(props, ref) {
  const { children, orientation } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  const { invalid } = useField({ labelProps });
  return (
    <Flex
      vertical={orientation === 'vertical' ? true : false}
      data-testid={makeTestId('radio-group')}
      {...radioGroupProps}
      ref={ref}>
      <RadioGroupContextProvider state={{ ...state, orientation, invalid }}>
        {isFunction(children)
          ? children({ labelProps, ...state, orientation, invalid })
          : children}
      </RadioGroupContextProvider>
    </Flex>
  );
});

RadioGroup.Radio = Radio;
RadioGroup.defaultProps = { orientation: 'vertical' };

export type { RadioGroupProps };
export { RadioGroup };
