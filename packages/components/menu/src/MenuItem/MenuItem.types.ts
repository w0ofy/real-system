import type { MenuItemPrimitiveProps } from '@real-system/menu-primitive';
import type {
  As,
  RealSystemComponentProps,
} from '@real-system/styling-library';

type CommonMenuItemProps<T extends As = 'div'> = RealSystemComponentProps<T> &
  Pick<
    MenuItemPrimitiveProps,
    | 'hideOnClick'
    | 'focusOnHover'
    | 'preventScrollOnKeyDown'
    | 'disabled'
    | 'children'
  >;

export type { CommonMenuItemProps };
