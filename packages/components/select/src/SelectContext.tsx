import { AriakitSelectState } from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type CustomState = { error: boolean };
type State = AriakitSelectState & CustomState;
type SelectContext = {
  state: State;
};

const useSelect = ({ state }: SelectContext): State => state;

const [SelectContextProvider, useSelectStateContext] = constate(useSelect);

export type { SelectContext };
export { SelectContextProvider, useSelectStateContext };
