import {
  AriakitSelectState,
  AriakitSelectStateProps,
} from '@real-system/ariakit-library';
import type { BoxStyleProps } from '@real-system/box-primitive';
import { RealSystemElementProps } from '@real-system/utils-library';

type SelectState = AriakitSelectState;
type SelectStateProps = AriakitSelectStateProps;
type InternalSelectProps = { state: SelectState };

/** Select component */
type SelectProps = SelectStateProps & {
  children: React.ReactNode;
} & BoxStyleProps &
  RealSystemElementProps;

type OmitSelectState<T> = Omit<T, 'state'>;

export type {
  InternalSelectProps,
  OmitSelectState,
  SelectProps,
  SelectState,
  SelectStateProps,
};
