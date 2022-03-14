import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
  useContext,
} from 'react';

import {
  AriakitMenu,
  AriakitMenuButton,
  AriakitMenuButtonArrow,
  AriakitMenuItem,
  useAriakitMenuState,
} from '@real-system/ariakit-library';

// Use React Context so we can determine if the menu is a submenu or not.
const MenuContext = createContext(false);

export type MenuItemProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  disabled?: boolean;
};

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem({ label, ...props }, ref) {
    return (
      <AriakitMenuItem className="menu-item" ref={ref} {...props}>
        {label}
      </AriakitMenuItem>
    );
  }
);

export type MenuProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  disabled?: boolean;
};

type AriakitMenuButtonProps = HTMLAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { label, children, ...props },
  ref
) {
  const inSubmenu = useContext(MenuContext);
  const menu = useAriakitMenuState({
    gutter: 8,
    shift: inSubmenu ? -9 : 0,
  });

  const renderAriakitMenuButton = (menuButtonProps: AriakitMenuButtonProps) => (
    <AriakitMenuButton state={menu} className="button" {...menuButtonProps}>
      <span className="label">{label}</span>
      <AriakitMenuButtonArrow />
    </AriakitMenuButton>
  );

  return (
    <>
      {inSubmenu ? (
        // If it's a submenu, we have to combine the AriakitMenuButton and the
        // MenuItem components into a single component, so it works as a
        // submenu button.
        <AriakitMenuItem className="menu-item" ref={ref} {...props}>
          {renderAriakitMenuButton}
        </AriakitMenuItem>
      ) : (
        // Otherwise, we just render the menu button.
        renderAriakitMenuButton({ ref, ...props })
      )}
      <AriakitMenu state={menu} className="menu">
        <MenuContext.Provider value={true}>{children}</MenuContext.Provider>
      </AriakitMenu>
    </>
  );
});
