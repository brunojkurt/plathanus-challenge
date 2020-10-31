import React from 'react';
import { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon } from './styles';

export interface TCheckbox extends React.HTMLAttributes<HTMLInputElement>{
  checked: boolean;
  onChange?(): void;
  color?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<TCheckbox> = (props) => {

  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} readOnly/>
      <StyledCheckbox {...props}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default Checkbox;