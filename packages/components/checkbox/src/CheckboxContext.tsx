import type {
  CheckboxGroupState,
  SpectrumCheckboxGroupProps,
} from '@real-system/react-aria-library';
import { constate } from '@real-system/state-library';

export type CheckboxGroupContext = {
  state: CheckboxGroupState & {
    errorText: string | undefined;
    canSelectAll: boolean | undefined;
    orientation: SpectrumCheckboxGroupProps['orientation'];
  };
};

const useCheckboxGroup = ({ state }: CheckboxGroupContext) => state;

export const [
  CheckboxGroupContextProvider,
  useCheckboxGroupContext,
  useCheckboxGroupItemIsSelected,
  useCheckboxGroupIsDisabled,
  useCheckboxGroupValue,
] = constate(
  useCheckboxGroup,
  (state) => state,
  (state) => state.isSelected,
  (state) => state.isDisabled,
  (state) => state.value
);
