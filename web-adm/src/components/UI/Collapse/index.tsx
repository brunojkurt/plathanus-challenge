import React from 'react';
import  { CollapseContainer } from './styles';

interface TCollapse {
  collapsed?: boolean;
}

const Collapse: React.FC<TCollapse> = ({ collapsed, children }) => {
  return (
    <CollapseContainer collapsed={collapsed}>
      { children }
    </CollapseContainer>
  );
}

export default Collapse;