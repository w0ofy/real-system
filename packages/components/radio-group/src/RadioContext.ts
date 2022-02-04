import type {
  RadioGroupState,
  SpectrumRadioGroupProps,
} from '@real-system/react-aria-library';
import { constate } from '@real-system/state-library';

export type RadioGroupContext = {
  state: RadioGroupState & {
    errorText: string | undefined;
    orientation: SpectrumRadioGroupProps['orientation'];
  };
};

const useRadioGroup = ({ state }: RadioGroupContext) => state;

export const [RadioGroupContextProvider, useRadioGroupContext] =
  constate(useRadioGroup);
