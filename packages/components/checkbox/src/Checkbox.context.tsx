import type {
  AriaCheckboxGroupProps,
  AriaCheckboxGroupState,
} from '@real-system/a11y-library';
import { constate } from '@real-system/state-library';
import type { ValidationProps } from '@real-system/utils-library';

export type CheckboxGroupContext = {
  store: {
    state: AriaCheckboxGroupState;
    canSelectAll: boolean | undefined;
    orientation: AriaCheckboxGroupProps['orientation'];
    hasError: ValidationProps['hasError'];
  };
};

const useCheckboxGroup = ({ store }: CheckboxGroupContext) => store;

export const [
  CheckboxGroupContextProvider,
  useCheckboxGroupContext,
  useCheckboxGroupItemIsSelected,
  useCheckboxGroupIsDisabled,
  useCheckboxGroupValue,
] = constate(
  useCheckboxGroup,
  (store) => store,
  ({ state }) => state.isSelected,
  ({ state }) => state.isDisabled,
  ({ state }) => state.value
);
