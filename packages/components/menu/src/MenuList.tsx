import React from 'react';

import { AriakitMenu } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import styled, { css } from '@real-system/styling-library';

import { useMenuStateContext } from './MenuContext';

const StyledMenuList = styled(Box)(
  css({
    py: 3,
    zIndex: 1,
    backgroundColor: 'white',
    boxShadow: 'menu',
    borderRadius: 2,
    width: '15rem',
    minWidth: '15rem',
    maxWidth: '22rem',
    outline: 'none',
  })
);

type MenuProps = {
  children: React.ReactNode;
};

const MenuList = ({ children }: MenuProps) => {
  const state = useMenuStateContext();
  return (
    <AriakitMenu as={StyledMenuList} state={state}>
      {children}
    </AriakitMenu>
  );
};

export type { MenuProps };
export { MenuList };
