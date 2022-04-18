import type { BoxStyleProps } from '@real-system/box-primitive';
import type { MenuItemPrimitiveProps } from '@real-system/menu-primitive';
import type { As, RealSystemElementProps } from '@real-system/utils-library';

type CommonMenuItemProps<T extends As = 'div'> = RealSystemElementProps<T> &
  BoxStyleProps &
  Pick<
    MenuItemPrimitiveProps,
    | 'hideOnClick'
    | 'focusOnHover'
    | 'preventScrollOnKeyDown'
    | 'disabled'
    | 'children'
  >;

export type { CommonMenuItemProps };
