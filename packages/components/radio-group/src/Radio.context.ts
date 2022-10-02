import type {
  AriaRadioGroupState,
  AriaRadioLabelProps,
} from '@real-system/a11y-library';
import type { FieldControlValidation } from '@real-system/field';
import { constate } from '@real-system/state-library';

export type RadioGroupContext = {
  state: AriaRadioGroupState & {
    labelProps: AriaRadioLabelProps;
  } & Pick<FieldControlValidation, 'hasError'>;
};

const useRadioGroup = ({ state }: RadioGroupContext) => state;

const [RadioGroupContextProvider, useRadioGroupStateContext] =
  constate(useRadioGroup);

export { RadioGroupContextProvider, useRadioGroupStateContext };
