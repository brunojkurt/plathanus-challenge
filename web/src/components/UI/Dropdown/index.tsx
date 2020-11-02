import React, { useState } from 'react';
import { Dropdown as DropdownItem } from './styles';
import ClickAway from '../ClickAway';

interface DropdownProps {
  label: any;
  content: any;
  hover: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, content, hover = false }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <>
      <ClickAway onClickAway={ () => setOpen(false) }>
        <DropdownItem open={open}>
          { hover ? (
            <div onMouseOver={ () => setOpen(true) } onMouseOut={ () => setOpen(false) }>{ label }</div>
          ) : (
            <div onClick={ () => setOpen(!open) }>{ label }</div>
          )}
          
          <div className="content">
            { content }
          </div>
        </DropdownItem>
      </ClickAway>
    </>
  );
}

export default Dropdown;