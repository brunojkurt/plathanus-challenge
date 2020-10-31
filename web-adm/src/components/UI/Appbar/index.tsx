import React from 'react';
import { Appbar as Bar } from './styles';

const Appbar: React.FC = ({ children }) => {
  return (
    <Bar>
      { children }
    </Bar>
  );
}

export default Appbar;