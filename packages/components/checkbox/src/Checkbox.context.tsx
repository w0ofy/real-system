import type {
  AriaCheckboxGroupProps,
  AriaCheckboxGroupState,
} from '@real-system/a11y-library';
import type { FieldControlValidation } from '@real-system/field';
import { constate } from '@real-system/state-library';

export type CheckboxGroupContext = {
  state: AriaCheckboxGroupState & {
    canSelectAll: boolean | undefined;
    orientation: AriaCheckboxGroupProps['orientation'];
    validation: FieldControlValidation;
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
