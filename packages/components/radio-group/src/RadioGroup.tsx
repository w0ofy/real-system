import * as React from 'react';
import { forwardRef } from 'react';

import type { AriakitRadioStoreProps } from '@real-system/ariakit-library';
import {
  AriakitRadioGroup,
  useAriakitRadioStore,
} from '@real-system/ariakit-library';
import type { ValidationProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { Radio } from './Radio';
import { RadioGroupContextProvider } from './Radio.context';

type RadioGroupProps = {
  children?: React.ReactNode;
  onChange?: AriakitRadioStoreProps['setValue'];
  name?: string;
  id?: string;
} & Pick<ValidationProps, 'hasError' | 'disabled'> &
  Pick<AriakitRadioStoreProps, 'value' | 'defaultValue'>;

interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<RadioGroupProps> {
  Radio: typeof Radio;
}

// @ts-expect-error Radio (component) property is defined on the fn object after this is defined
const RadioGroup: RadioGroupComponent = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(function RadioGroup(
  { children, hasError, disabled, onChange, value, defaultValue, id, name },
  ref
) {
  const radio = useAriakitRadioStore({
    setValue: onChange,
    defaultValue,
    value,
  });

  return (
    <AriakitRadioGroup
      data-testid={makeTestId('radio-group')}
      store={radio}
      id={id}
      ref={ref}>
      <RadioGroupContextProvider
        {...radio}
        name={name}
        disabled={disabled}
        hasError={hasError}>
        {children}
      </RadioGroupContextProvider>
    </AriakitRadioGroup>
  );
});

RadioGroup.Radio = Radio;

export type { RadioGroupProps };
export { RadioGroup, RadioGroupComponent };
