import type { MenuStatePrimitive } from '@real-system/menu-primitive';
import { constate } from '@real-system/state-library';

type MenuState = MenuStatePrimitive;

type MenuContext = {
  state: MenuState;
};

const [MenuContextProvider, useMenuStateContext] = constate(
  ({ state }: MenuContext) => state
);

export type { MenuState };
export { MenuContextProvider, useMenuStateContext };
