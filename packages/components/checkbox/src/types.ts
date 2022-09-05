import type {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxProps,
} from '@real-system/a11y-library';
import type { InvalidConfig } from '@real-system/typography';

/** should match keys of values in RenamedCheckboxProps */

type CustomProps = {
  helpText?: string;
  invalid?: InvalidConfig;
};

type CheckboxProps = AriaCheckboxProps & CustomProps;

type CheckboxGroupProps = AriaCheckboxGroupProps & CustomProps;

/** Checkbox Group Item */
type CheckboxGroupItemProps = AriaCheckboxGroupItemProps & CustomProps;

export type {
  // real system props
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CheckboxProps,
  CustomProps,
};
