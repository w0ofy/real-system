import type {
  AriaRadioGroupProps,
  AriaRadioGroupState,
} from '@real-system/a11y-library';
import { constate } from '@real-system/state-library';

export type RadioGroupContext = {
  state: AriaRadioGroupState & {
    errorText: string | undefined;
    orientation: AriaRadioGroupProps['orientation'];
  };
};

const useRadioGroup = ({ state }: RadioGroupContext) => state;

export const [RadioGroupContextProvider, useRadioGroupContext] =
  constate(useRadioGroup);
