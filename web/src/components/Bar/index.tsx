import React from 'react';
import Appbar from '../../components/UI/Appbar';
import { Menu, MenuItem, Logo, InputWrapper, ContainerBase } from './styles';
import { FiSearch } from 'react-icons/fi';

interface TMenuItem {
  label: string;
  onClick: () => void;
} 

interface TBar {
  currentSection?: string;
  menuItems: TMenuItem[];
  background?: string;
}

const Bar: React.FC<TBar> = ({ menuItems, currentSection, background }) => {
  return (
    <Appbar background={background}>
      <ContainerBase size="xl">
        { !!menuItems.length && (
          <Menu>
            { menuItems.map((item, key) => (
              <MenuItem 
                key={key}
                onClick={item.onClick}
                selected={item.label === currentSection}>
                  {item.label}
              </MenuItem>
            ))}
          </Menu>
        )}
        
        <Logo src={`${process.env.REACT_APP_PUBLIC_URL}/logo.png`} />

        <InputWrapper>
          <input placeholder="Search..."/>
          <FiSearch/>
        </InputWrapper>
      </ContainerBase>
    </Appbar>
  );
}

export default Bar;