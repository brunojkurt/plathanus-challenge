import React from 'react';
import { Menu } from './styles';

interface SideMenuProps {
  open: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ children, open = false }) => {
  
  return (
    <Menu open={open}>{ children }</Menu>
  );
}

export default SideMenu;