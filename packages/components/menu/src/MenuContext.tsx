import { AriakitMenuState } from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type MenuState = AriakitMenuState;

type MenuContext = {
  state: MenuState;
};

const [MenuContextProvider, useMenuStateContext] = constate(
  ({ state }: MenuContext) => state
);

export type { MenuState };
export { MenuContextProvider, useMenuStateContext };
