import { constate } from '@real-system/state';

export type DialogState = {
  isOpen: boolean;
  dismiss: (event?: React.SyntheticEvent) => void;
};

export type DialogContext = {
  state: DialogState;
};

const useDialog = ({ state }: DialogContext) => state;

export const [DialogContextProvider, useDialogContext] = constate(useDialog);
