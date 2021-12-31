import { constate } from '@real-system/state';

export type DialogContext = {
  isVisible: boolean;
  dismiss: (event?: React.SyntheticEvent) => void;
};

const useDialog = (modalContext: DialogContext) => modalContext;

export const [DialogContextProvider, useDialogContext] = constate(useDialog);
