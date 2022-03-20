import type { BoxStyleProps } from '@real-system/box-primitive';
import type { RealSystemElementProps } from '@real-system/utils-library';

type MenuElementProps = RealSystemElementProps;
type CommonMenuProps = MenuElementProps & BoxStyleProps;
type OmitMenuState<T> = Omit<T, 'state'>;

export type { CommonMenuProps, MenuElementProps, OmitMenuState };
