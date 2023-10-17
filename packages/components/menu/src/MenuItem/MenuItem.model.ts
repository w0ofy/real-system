import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import type { MenuItemPrimitiveProps } from '@real-system/menu-primitive';
import type { As } from '@real-system/styled-library';

type CommonMenuItemProps<T extends As = 'div'> = Omit<
  RealElementPrimitiveProps<T>,
  'as' | 'children'
> &
  Pick<
    MenuItemPrimitiveProps,
    | 'hideOnClick'
    | 'focusOnHover'
    | 'preventScrollOnKeyDown'
    | 'disabled'
    | 'children'
  >;

export type { CommonMenuItemProps };
