import type { CheckboxGroupState } from '@real-system/react-aria';
import { constate } from '@real-system/state';

export type CheckboxGroupContext = {
  state: CheckboxGroupState & {
    errorText: string | undefined;
    canSelectAll: boolean | undefined;
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
