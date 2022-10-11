import type { MenuStatePrimitive } from '@real-system/menu-primitive';
import { makeContext } from '@real-system/state-library';

declare type Values = Record<
  string,
  string | boolean | number | Array<string | number>
>;

type MenuState<V extends Values = Values> = MenuStatePrimitive<V>;

const [MenuContextProvider, useMenuStateContext] = makeContext<
  MenuState<Values>
>({
  name: 'MenuContext',
});

export type { MenuState, Values };
export { MenuContextProvider, useMenuStateContext };
