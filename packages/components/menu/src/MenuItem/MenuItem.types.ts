import type { AriakitMenuItemProps } from '@real-system/ariakit-library';
import type { BoxStyleProps } from '@real-system/box-primitive';
import type { As, RealSystemElementProps } from '@real-system/utils-library';

type CommonMenuItemProps<T extends As = 'div'> = RealSystemElementProps<T> &
  BoxStyleProps &
  Pick<
    AriakitMenuItemProps,
    | 'hideOnClick'
    | 'focusOnHover'
    | 'preventScrollOnKeyDown'
    | 'disabled'
    | 'children'
  >;

export type { CommonMenuItemProps };
