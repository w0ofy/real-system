import { useCallback, useMemo, useState } from 'react';

import {
  useFocusWithin,
  useHover,
  usePress,
} from '@real-system/react-aria-library';

import {
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CustomCheckboxGroupProps,
  CustomCheckboxProps,
  CustomProps,
  ReactAriaCheckboxGroupItemProps,
  ReactAriaCheckboxGroupProps,
  ReactAriaCheckboxProps,
} from './types';
import { CheckboxProps } from '.';

const useInteractions = ({ isDisabled }: ReactAriaCheckboxProps) => {
  const [isFocusedWithin, setFocusedWithin] = useState(false);

  const { focusWithinProps } = useFocusWithin({
    isDisabled: isDisabled,
    onFocusWithinChange: (isFocusedWithin) => setFocusedWithin(isFocusedWithin),
  });
  const { pressProps, isPressed } = usePress({
    isDisabled: isDisabled,
  });
  const { hoverProps, isHovered } = useHover({ isDisabled: isDisabled });

  return {
    hoverProps,
    isHovered,
    isFocusedWithin,
    setFocusedWithin,
    focusWithinProps,
    pressProps,
    isPressed,
  };
};

type UseInteractionsReturnValue = ReturnType<typeof useInteractions>;

const restoreCheckboxProps = (
  props: CheckboxProps
): ReactAriaCheckboxProps & CustomProps & CustomCheckboxProps => {
  const {
    disabled,
    required,
    indeterminate,
    readonly,
    checked,
    ...reactAriaAndCustomProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
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
    ...reactAriaAndCustomProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
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

export type { UseIndeterminateParams, UseInteractionsReturnValue };
export {
  restoreCheckboxGroupItemProps,
  restoreCheckboxGroupProps,
  restoreCheckboxProps,
  useIndeterminate,
  useInteractions,
};
