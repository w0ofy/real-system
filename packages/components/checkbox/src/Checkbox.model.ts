import { CheckboxStatePrimitiveProps } from '@real-system/checkbox-primitive';

type PossibleCheckboxValues =
  | boolean
  | string
  | number
  | Array<string | number>;
type SetCheckboxValue<T extends PossibleCheckboxValues = any> =
  CheckboxStatePrimitiveProps<T>['setValue'];

export type { PossibleCheckboxValues, SetCheckboxValue };
