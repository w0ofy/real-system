import * as React from 'react';

import type { CheckboxStatePrimitiveProps } from '@real-system/checkbox-primitive';
import { useCheckboxStatePrimitive } from '@real-system/checkbox-primitive';
import type { FieldControlOptions } from '@real-system/field';
import { useFieldControl } from '@real-system/field';

import { PossibleCheckboxValues } from './Checkbox.model';

const EMPTY_STATE: PossibleCheckboxValues = [];
type Checked = boolean | 'mixed';

type TreeStateOptions<
  T extends PossibleCheckboxValues = PossibleCheckboxValues
> = CheckboxStatePrimitiveProps<T> & {
  items: T;
} & FieldControlOptions;

const getGroupValue = (checkedItems, items) => {
  if (checkedItems?.length && items?.length > 0) {
    if (items?.every((value) => checkedItems.includes(value))) {
      return true;
    }
    return 'mixed';
  }
  return false;
};

const useTreeState = <
  T extends PossibleCheckboxValues = PossibleCheckboxValues
>({
  value,
  setValue,
  defaultValue,
  items: itemsProp,
  invalid,
  required,
  readOnly,
  disabled,
}: TreeStateOptions<T>) => {
  const group = useCheckboxStatePrimitive<Checked>({
    defaultValue: getGroupValue(defaultValue, itemsProp),
  });
  const items = useCheckboxStatePrimitive<T>({
    value,
    setValue,
    defaultValue,
  });
  const field = useFieldControl({ invalid, required, readOnly, disabled });

  // updates items when group is toggled
  React.useEffect(() => {
    if (group.value === true) {
      items.setValue(itemsProp);
    } else if (group.value === false) {
      items.setValue(EMPTY_STATE as T);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  // updates group when items is toggled
  React.useEffect(() => {
    group.setValue(getGroupValue(items?.value, itemsProp));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return { group, items, ...field };
};

export type { TreeStateOptions };
export { useTreeState };
