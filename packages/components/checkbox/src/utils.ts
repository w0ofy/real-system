import { useState } from 'react';

import { useFocusWithin, useHover, usePress } from '@real-system/react-aria';

import {
  CheckboxGroupItemProps,
  CheckboxGroupProps,
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

const restoreCheckboxProps = (props: CheckboxProps): ReactAriaCheckboxProps => {
  const {
    disabled,
    required,
    indeterminate,
    readonly,
    checked,
    ...reactAriaProps
  } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    isSelected: checked,
    ...reactAriaProps,
  };
};

const restoreCheckboxGroupItemProps = (
  props: CheckboxGroupItemProps
): ReactAriaCheckboxGroupItemProps => {
  const { disabled, required, indeterminate, readonly, ...reactAriaProps } =
    props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isIndeterminate: indeterminate,
    isRequired: required,
    ...reactAriaProps,
  };
};

const restoreCheckboxGroupProps = (
  props: CheckboxGroupProps
): ReactAriaCheckboxGroupProps => {
  const { disabled, readonly, ...reactAriaProps } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    ...reactAriaProps,
  };
};

export type { UseInteractionsReturnValue };
export {
  restoreCheckboxGroupItemProps,
  restoreCheckboxGroupProps,
  restoreCheckboxProps,
  useInteractions,
};
