import React from 'react';

import {
  AriakitMenuState,
  AriakitMenuStateProps,
  useAriakitMenuState,
} from '@real-system/ariakit-library';
import { constate } from '@real-system/state-library';

type MenuContext = {
  state: AriakitMenuState;
};
const useMenu = ({ state }: MenuContext) => state;

const [MenuContextProvider, useMenuStateContext] = constate(useMenu);

type MenuContainerProps = {
  children: React.ReactNode;
  placement?: AriakitMenuStateProps['placement'];
} & Pick<AriakitMenuStateProps, 'placement' | 'visible'>;

const Menu = ({
  children,
  placement = 'bottom-end',
  visible,
}: MenuContainerProps) => {
  const state = useAriakitMenuState({ gutter: 4, placement, visible });
  return <MenuContextProvider state={state}>{children}</MenuContextProvider>;
};

export type { MenuContainerProps };
export { Menu, useMenuStateContext };
