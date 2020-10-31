import React from 'react';
import { ToastBase } from './styles';
import { IoMdCheckmarkCircle, IoMdCloseCircle, IoMdWarning, IoMdInformationCircle, IoMdClose } from 'react-icons/io';

export interface TToast {
  type: 'success' | 'error' | 'warning' | 'info';
  sharp?: boolean;
  onClose?: Function;
}

const Toast: React.FC<TToast> = (props) => {
  const { children, type, onClose } = props;
  return (
    <ToastBase {...props}>
      <span className="type-icon">
        { type === 'success' && ( <IoMdCheckmarkCircle/> ) }
        { type === 'error' && ( <IoMdCloseCircle/> ) }
        { type === 'warning' && ( <IoMdWarning/> ) }
        { type === 'info' && ( <IoMdInformationCircle/> ) }
      </span>
      { children }
      { onClose && (
        <span 
          className="close-icon"
          onClick={() => onClose() }>
          <IoMdClose/>
        </span>
      )}
    </ToastBase>
  );
}

export default Toast;