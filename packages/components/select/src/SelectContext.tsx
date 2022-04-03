import { AriakitSelectState } from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type SelectContext = {
  state: AriakitSelectState;
};

const useSelect = ({ state }: SelectContext): AriakitSelectState => state;

const [SelectContextProvider, useSelectStateContext] = constate(useSelect);

export type { SelectContext };
export { SelectContextProvider, useSelectStateContext };
