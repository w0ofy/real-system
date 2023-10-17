import { constate } from '@real-system/state-library';

export type DialogState = {
  isOpen: boolean;
  onDismiss: (event?: React.SyntheticEvent) => void;
};

export type DialogContext = {
  store: DialogState;
};

const useDialog = ({ store }: DialogContext) => store;

export const [DialogContextProvider, useDialogContext] = constate(useDialog);
