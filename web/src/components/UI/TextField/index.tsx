import React from 'react';
import { Wrapper, InputBase, LabelBase } from './styles';

export interface TTextField extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  w100?: boolean;
  color?: string;
}

const TextField: React.FC<TTextField> = (props) => {
  const { label, placeholder, required, w100 } = props;

  return (
    <Wrapper w100={w100}>
      <InputBase
        placeholder={ placeholder || ' ' }
        {...props}/>
        <LabelBase className="label-name">
          { label && (
            <span className="content-name">{`${label} ${required ? '*' : ''}`}</span>
          )}
        </LabelBase>
    </Wrapper>
  );
}

export default TextField;