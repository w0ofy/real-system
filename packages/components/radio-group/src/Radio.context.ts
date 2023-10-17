import type { AriakitRadioProps } from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';
import type { ValidationProps } from '@real-system/utils-library';

export type RadioGroupContext = { name?: string } & NonNullable<
  AriakitRadioProps['store']
> &
  Pick<ValidationProps, 'hasError' | 'disabled'>;

const useRadioGroup = (store: RadioGroupContext) => store;

const [RadioGroupContextProvider, useRadioGroupStateContext] =
  constate(useRadioGroup);

export { RadioGroupContextProvider, useRadioGroupStateContext };
