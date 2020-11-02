import React, { useEffect, useRef } from 'react';
import { Wrapper, SelectBase, LabelBase } from './styles';
import { IoMdArrowDropdown } from 'react-icons/io';

export interface TSelect extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  w100?: boolean;
  color?: string;
}

const TextField: React.FC<TSelect> = (props) => {
  const { label, placeholder, required, w100, children } = props;
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const selectInput = selectRef.current;

    const updateClass = () => {
      if(selectInput?.value || placeholder) {
        selectInput?.classList.add('filled');
      } else {
        selectInput?.classList.remove('filled');
      }
    }

    if (selectInput)
      selectInput.addEventListener('change', updateClass);

    updateClass();

    return () => {
      selectInput?.removeEventListener('change', updateClass);
    }
    
  }, [placeholder])

  return (
    <Wrapper w100={w100}>
      <SelectBase
        ref={selectRef}
        placeholder={ placeholder || ' ' }
        {...props}>
        { placeholder ? (
          <option value="" className="placeholder">{placeholder}</option>
        ) : (
          <option aria-label="None" value=""></option>
        )}
        { children }
      </SelectBase>
      <LabelBase className="label-name">
        { label && (
          <span className="content-name">{`${label} ${required ? '*' : ''}`}</span>
        )}
        <IoMdArrowDropdown/>
      </LabelBase>
    </Wrapper>
  );
}

export default TextField;