import type { RadioGroupState as AriaRadioGroupState } from '@react-stately/radio';
import type {
  AriaRadioGroupProps as OriginalAriaRadioGroupProps,
  AriaRadioProps as OriginalAriaRadioProps,
} from '@react-types/radio';

type RenamedRadioProps = {
  disabled?: OriginalAriaRadioProps['isDisabled'];
};

type RenamedRadioGroupProps = {
  disabled?: OriginalAriaRadioGroupProps['isDisabled'];
  readonly?: OriginalAriaRadioGroupProps['isReadOnly'];
  required?: OriginalAriaRadioGroupProps['isRequired'];
};

type PropsToRename = 'isDisabled' | 'isReadonly' | 'isRequired';

/** Radio */
type AriaRadioProps = RenamedRadioProps &
  Omit<OriginalAriaRadioProps, PropsToRename>;

type RestoredAriaRadioProps = OriginalAriaRadioProps;

/** Radio Group */
type AriaRadioGroupProps = RenamedRadioGroupProps &
  Omit<OriginalAriaRadioGroupProps, PropsToRename>;

type RestoredAriaRadioGroupProps = OriginalAriaRadioGroupProps;

export type {
  // real system props
  AriaRadioGroupProps,
  AriaRadioGroupState,
  AriaRadioProps,
  // react aria props
  RestoredAriaRadioGroupProps,
  RestoredAriaRadioProps,
};
