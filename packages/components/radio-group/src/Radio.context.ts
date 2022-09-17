import type {
  AriaRadioGroupProps,
  AriaRadioGroupState,
} from '@real-system/a11y-library';
import { constate } from '@real-system/state-library';
import type { InvalidConfig } from '@real-system/typography';

export type RadioGroupContext = {
  state: AriaRadioGroupState & {
    orientation: AriaRadioGroupProps['orientation'];
    invalid?: InvalidConfig;
  };
};

const useRadioGroup = ({ state }: RadioGroupContext) => state;

export const [RadioGroupContextProvider, useRadioGroupContext] =
  constate(useRadioGroup);
