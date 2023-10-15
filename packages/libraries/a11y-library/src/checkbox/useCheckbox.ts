import { useCheckbox as useAriaCheckbox } from '@react-aria/checkbox';
import { useToggleState as useAriaToggleState } from '@react-stately/toggle';

import type { AriaCheckboxProps, RestoredAriaCheckboxProps } from './types';

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
  const restoredProps = restoreCheckboxProps(props);
  return useAriaCheckbox(restoredProps, state, ref);
};

const useToggleState = (props: AriaCheckboxProps) => {
  const restoredProps = restoreCheckboxProps(props);
  return useAriaToggleState(restoredProps);
};

export { useCheckbox, useToggleState };
