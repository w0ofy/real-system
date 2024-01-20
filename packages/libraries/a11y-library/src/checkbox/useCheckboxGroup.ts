import {
  useCheckboxGroup as useAriaCheckboxGroup,
  useCheckboxGroupItem as useAriaCheckboxGroupItem,
} from '@react-aria/checkbox';
import type { CheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroupState as useAriaCheckboxGroupState } from '@react-stately/checkbox';

import type {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  CustomCheckboxGroupProps,
  RestoredAriaCheckboxGroupItemProps,
  RestoredAriaCheckboxGroupProps,
} from './types';

const restoreCheckboxGroupProps = (
  props: AriaCheckboxGroupProps
): RestoredAriaCheckboxGroupProps & CustomCheckboxGroupProps => {
  const { disabled, readonly, ...restProps } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    ...restProps,
  };
};

const useCheckboxGroupState = (props: AriaCheckboxGroupProps) => {
  const restoredProps = restoreCheckboxGroupProps(props);
  return useAriaCheckboxGroupState(restoredProps);
};

const useCheckboxGroup = (
  props: AriaCheckboxGroupProps,
  state: CheckboxGroupState
) => {
  const restoredProps = restoreCheckboxGroupProps(props);
  return useAriaCheckboxGroup(restoredProps, state);
};

const restoreCheckboxGroupItemProps = (
  props: AriaCheckboxGroupItemProps
): RestoredAriaCheckboxGroupItemProps => {
  const {
    disabled,
    required,
    indeterminate,
    readonly,
    checked,
    defaultChecked,
    ...restProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
    defaultSelected: defaultChecked,
    ...restProps,
  };
};

const useCheckboxGroupItem: typeof useAriaCheckboxGroupItem = (
  props,
  state,
  ref
) => {
  const restoredProps = restoreCheckboxGroupItemProps(props);
  console.log(ref);
  return useAriaCheckboxGroupItem(restoredProps, state, ref);
};

export type { CheckboxGroupState };
export { useCheckboxGroup, useCheckboxGroupItem, useCheckboxGroupState };
