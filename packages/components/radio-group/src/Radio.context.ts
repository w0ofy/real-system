import type { AriakitRadioState } from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';
import { ValidationProps } from '@real-system/utils-library';

export type RadioGroupContext = { name?: string } & AriakitRadioState &
  Pick<ValidationProps, 'hasError' | 'disabled'>;

const useRadioGroup = (state: RadioGroupContext) => state;

const [RadioGroupContextProvider, useRadioGroupStateContext] =
  constate(useRadioGroup);

export { RadioGroupContextProvider, useRadioGroupStateContext };
