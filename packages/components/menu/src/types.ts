import type { BoxStyleProps } from '@real-system/box-primitive';
import type { As, RealSystemElementProps } from '@real-system/utils-library';

type CommonMenuProps<T extends As = 'div'> = RealSystemElementProps<T> &
  BoxStyleProps;
type OmitMenuState<T> = Omit<T, 'state'>;

export type { CommonMenuProps, OmitMenuState };
