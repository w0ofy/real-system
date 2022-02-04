import { useCallback, useMemo } from 'react';

import {
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CustomCheckboxGroupProps,
  CustomProps,
  ReactAriaCheckboxGroupItemProps,
  ReactAriaCheckboxGroupProps,
  ReactAriaCheckboxProps,
} from './types';
import { CheckboxProps } from '.';

const restoreCheckboxProps = (
  props: CheckboxProps
): ReactAriaCheckboxProps & CustomProps => {
  const {
    disabled,
    required,
    indeterminate,
    readonly,
    checked,
    defaultChecked,
    ...reactAriaAndCustomProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
    defaultSelected: defaultChecked,
    ...reactAriaAndCustomProps,
  };
};

const restoreCheckboxGroupProps = (
  props: CheckboxGroupProps
): ReactAriaCheckboxGroupProps & CustomCheckboxGroupProps => {
  const { disabled, readonly, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    ...reactAriaAndCustomProps,
  };
};

const restoreCheckboxGroupItemProps = (
  props: CheckboxGroupItemProps
): ReactAriaCheckboxGroupItemProps & CustomProps => {
  const {
    disabled,
    required,
    indeterminate,
    readonly,
    checked,
    defaultChecked,
    ...reactAriaAndCustomProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
    defaultSelected: defaultChecked,
    ...reactAriaAndCustomProps,
  };
};

/** useIndeterminate hook */
type UseIndeterminateParams<V extends string, A extends string> = {
  values: V[];
  indeterminateValue: A;
  checkedItems: V[];
  setCheckedItems: React.Dispatch<any> | ((value: (V | A)[]) => void);
};

const emptyValues = [];

const useIndeterminate = <V extends string, A extends string>({
  values,
  indeterminateValue,
  checkedItems,
  setCheckedItems,
}: UseIndeterminateParams<V, A>) => {
  const allChecked = useMemo(
    () => values.every((value) => checkedItems.includes(value)),
    [checkedItems, values]
  );
  const indeterminate = useMemo(
    () => values.some((value) => checkedItems.includes(value)) && !allChecked,
    [allChecked, checkedItems, values]
  );

  const setValues = useCallback(
    (value: (V | A)[]) => [...new Set([indeterminateValue, ...value])],
    [indeterminateValue]
  );

  const onCheckboxGroupChange = useCallback(
    (value: (V | A)[]) => {
      const indeterminateWithoutValueSelected =
        value.length === 1 && value[0] === indeterminateValue;

      return setCheckedItems(
        indeterminateWithoutValueSelected
          ? emptyValues
          : value.length
          ? setValues(value)
          : value
      );
    },
    [indeterminateValue, setCheckedItems, setValues]
  );
  const onIndeterminateChange = useCallback(
    (value: boolean) =>
      setCheckedItems(
        indeterminate
          ? setValues(values)
          : value
          ? setValues(values)
          : emptyValues
      ),
    [indeterminate, setCheckedItems, values, setValues]
  );
  return {
    indeterminateProps: { indeterminate, onChange: onIndeterminateChange },
    checkBoxGroupProps: { onChange: onCheckboxGroupChange, canSelectAll: true },
  };
};

export type { UseIndeterminateParams };
export {
  restoreCheckboxGroupItemProps,
  restoreCheckboxGroupProps,
  restoreCheckboxProps,
  useIndeterminate,
};
