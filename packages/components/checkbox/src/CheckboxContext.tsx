import type { CheckboxGroupState } from '@real-system/react-aria';
import { constate } from '@real-system/state';

export type CheckboxGroupContext = {
  value: CheckboxGroupState;
};

const useCheckboxGroup = ({ value }: CheckboxGroupContext) => value;

export const [CheckboxGroupContextProvider, useCheckboxGroupContext] =
  constate(useCheckboxGroup);
