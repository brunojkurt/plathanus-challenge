import React from 'react';
import { Appbar as Bar } from './styles';

interface TAppbar {
  background?: string;
}

const Appbar: React.FC<TAppbar> = ({ children, background }) => {
  
  return (
    <Bar background={background}>
      { children }
    </Bar>
  );
}

export default Appbar;