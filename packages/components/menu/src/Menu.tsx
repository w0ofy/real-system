import React from 'react';

import {
  AriakitMenuStateProps,
  useAriakitMenuState,
} from '@real-system/ariakit-library';

import { MenuContextProvider } from './MenuContext';

type MenuProps = {
  children: React.ReactNode;
} & Omit<AriakitMenuStateProps<any>, 'orientation'>;
/** @todo ^^ fix any param — this is supposed to be inferred from values prop — but there's currently a typing issue in ariakit */

const isAutoPlacement = (placement: AriakitMenuStateProps['placement']) =>
  placement === 'auto' ||
  placement === 'auto-end' ||
  placement === 'auto-start';
const Menu = ({
  children,
  placement = 'bottom-end',
  visible,
  values,
  defaultValues,
  flip,
  ...restProps
}: MenuProps) => {
  const state = useAriakitMenuState({
    gutter: 4,
    placement,
    visible,
    values,
    defaultValues,
    flip: isAutoPlacement(placement) ? true : flip,
    ...restProps,
  });
  return <MenuContextProvider state={state}>{children}</MenuContextProvider>;
};

export type { MenuProps };
export { Menu };
