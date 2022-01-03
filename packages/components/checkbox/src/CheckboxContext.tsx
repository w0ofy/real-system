import type { CheckboxGroupState } from '@real-system/react-aria';
import { constate } from '@real-system/state';

export type CheckboxGroupContext = {
  value: CheckboxGroupState;
};

const useCheckboxGroup = ({ value }: CheckboxGroupContext) => value;

export const [
  CheckboxGroupContextProvider,
  useCheckboxGroupContext,
  useCheckboxGroupItemIsSelected,
  useCheckboxGroupIsDisabled,
  useCheckboxGroupValue,
] = constate(
  useCheckboxGroup,
  (value) => value,
  (value) => value.isSelected,
  (value) => value.isDisabled,
  (value) => value.value
);
