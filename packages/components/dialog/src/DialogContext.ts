import { constate } from '@real-system/state';

export type DialogContext = {
  visible: boolean;
  hide: (event?: React.SyntheticEvent) => void;
};

const useDialog = (modalContext: DialogContext) => modalContext;

export const [DialogContextProvider, useDialogContext] = constate(useDialog);
