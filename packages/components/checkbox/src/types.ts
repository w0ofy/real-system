/**
 * Renamed props to make prop api consistent with other component prop names
 */
import type {
  Aria_AriaCheckboxGroupItemProps,
  Aria_AriaCheckboxGroupProps,
  Aria_AriaCheckboxProps,
} from '@real-system/react-aria';

type RenamedReactAriaProps = {
  disabled?: Aria_AriaCheckboxProps['isDisabled'];
  readonly?: Aria_AriaCheckboxProps['isReadOnly'];
  indeterminate?: Aria_AriaCheckboxProps['isIndeterminate'];
  required?: Aria_AriaCheckboxProps['isRequired'];
  checked?: Aria_AriaCheckboxProps['isSelected'];
};

type CustomProps = {
  helpText?: string;
};

type PropsToRename =
  | 'isDisabled'
  | 'isReadonly'
  | 'isIndeterminate'
  | 'isRequired'
  | 'isSelected';

/** Checkbox */
type CheckboxProps = RenamedReactAriaProps &
  Omit<Aria_AriaCheckboxProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxProps = Aria_AriaCheckboxProps;

/** Checkbox Group */
type CheckboxGroupProps = Pick<RenamedReactAriaProps, 'readonly' | 'disabled'> &
  Omit<Aria_AriaCheckboxGroupProps, PropsToRename>;

type ReactAriaCheckboxGroupProps = Aria_AriaCheckboxGroupProps;

/** Checkbox Group Item */
type CheckboxGroupItemProps = Omit<RenamedReactAriaProps, 'checked'> &
  Omit<Aria_AriaCheckboxGroupItemProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxGroupItemProps = Aria_AriaCheckboxGroupItemProps;

export type {
  // real system props
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CheckboxProps,
  CustomProps,
  // react aria props
  ReactAriaCheckboxGroupItemProps,
  ReactAriaCheckboxGroupProps,
  ReactAriaCheckboxProps,
};
