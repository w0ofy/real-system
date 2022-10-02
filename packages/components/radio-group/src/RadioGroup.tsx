import * as React from 'react';
import { forwardRef } from 'react';

import type { AriaRadioGroupProps } from '@real-system/a11y-library';
import {
  AriakitRadioGroup,
  useAriakitRadioState,
} from '@real-system/ariakit-library';
import { real } from '@real-system/elements-primitive';
import { useFieldControl } from '@real-system/field';
import type { RealSystemChildrenProp } from '@real-system/styled-library';
import { isFunction, makeTestId } from '@real-system/utils-library';

import { Radio } from './Radio';
import { RadioGroupContextProvider } from './Radio.context';
import type { CustomProps } from './RadioGroup.model';

type CustomRadioGroupProps = {
  readonly?: boolean;
  required?: boolean;
} & RealSystemChildrenProp;

type RadioGroupProps = Omit<AriaRadioGroupProps, 'orientation'> &
  CustomProps &
  CustomRadioGroupProps;

interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<RadioGroupProps> {
  Radio: typeof Radio;
}

// @ts-expect-error Radio (component) property is defined on the fn object after this is defined
const RadioGroup: RadioGroupComponent = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(function RadioGroup(props, ref) {
  const { children, hasError: hasErrorProp } = props;

  const field = useFieldControl({ validation: { hasError: hasErrorProp } });

  const radio = useAriakitRadioState();

  return (
    <AriakitRadioGroup
      data-testid={makeTestId('radio-group')}
      state={radio}
      {...field.inputProps}
      ref={ref}>
      <RadioGroupContextProvider
        state={{
          ...radio,
          labelProps: field.labelProps,
          hasError: field.validation.hasError,
        }}>
        {isFunction(children)
          ? children({
              labelProps: field.labelProps,
              hasError: field.validation.hasError,
            })
          : children}
      </RadioGroupContextProvider>
    </AriakitRadioGroup>
  );
});

RadioGroup.Radio = Radio;

export type { RadioGroupProps };
export { RadioGroup, RadioGroupComponent };
