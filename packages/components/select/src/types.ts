import type { SelectProviderPrimitiveProps } from '@real-system/select-primitive';
import type {
  RealSystemChildrenProp,
  StylishProps,
} from '@real-system/styled-library';
import type { ValidationProps } from '@real-system/utils-library';

/** Select Container component */
type SelectProps = {
  onChange?: SelectProviderPrimitiveProps['setValue'];
  label?: React.ReactNode;
  /** @default 'bottom-start' */
  placement?: SelectProviderPrimitiveProps['placement'];
} & Partial<
  Pick<
    SelectProviderPrimitiveProps,
    'defaultValue' | 'value' | 'open' | 'placement' | 'setOpen'
  >
> &
  StylishProps &
  RealSystemChildrenProp &
  Pick<ValidationProps, 'hasError' | 'disabled' | 'required'>;

type OmitSelectPrivateProps<T> = Omit<T, 'state' | 'as'>;
type CommonSelectProps<T> = Omit<T, 'state' | 'as'> &
  Omit<StylishProps, keyof T | 'as'>;

export type { CommonSelectProps, OmitSelectPrivateProps, SelectProps };
