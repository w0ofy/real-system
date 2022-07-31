import type { CheckboxStatePrimitive } from '@real-system/checkbox-primitive';
import { makeContext } from '@real-system/state-library';

type CheckboxGroupContext = {
  group: CheckboxStatePrimitive;
  items: CheckboxStatePrimitive;
  required: boolean;
};

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  makeContext<CheckboxGroupContext>({
    strict: false,
    name: 'CheckboxGroupContext',
  });

/**
 * Abstraction hook for using `CheckboxGroupContext`
 */
const useCheckboxGroup = useCheckboxGroupContext;

export type { CheckboxGroupContext };
export { CheckboxGroupProvider, useCheckboxGroup, useCheckboxGroupContext };
