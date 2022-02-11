import { useCheckbox as useAriaCheckbox } from '@react-aria/checkbox';
import { useToggleState as useAriaToggleState } from '@react-stately/toggle';

import { AriaCheckboxProps, RestoredAriaCheckboxProps } from './types';

const restoreCheckboxProps = (
  props: AriaCheckboxProps
): RestoredAriaCheckboxProps => {
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

const useCheckbox: typeof useAriaCheckbox = (props, state, ref) => {
  const restoreProps = restoreCheckboxProps(props);
  return useAriaCheckbox(restoreProps, state, ref);
};

const useToggleState = (props: AriaCheckboxProps) => {
  const restoreProps = restoreCheckboxProps(props);
  return useAriaToggleState(restoreProps);
};

export { useCheckbox, useToggleState };
