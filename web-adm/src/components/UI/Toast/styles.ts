import styled, { css } from 'styled-components';
import { colors } from '../../../styles/global';
import { TToast } from './index';

const toastSuccessStyle = css`
  background: ${colors['success']};
  color: #303030;
`

const toastErrorStyle = css`
  background: ${colors['error']};
  color: #FFF;
`

const toastWarningStyle = css`
  background: ${colors['warning']};
  color: #303030;
`

const toastInfoStyle = css`
  background: ${colors['info']};
  color: #303030;
`

const types: {[type: string]: any} = {
  success: toastSuccessStyle,
  error: toastErrorStyle,
  warning: toastWarningStyle,
  info: toastInfoStyle
}

export const ToastBase = styled.div<TToast>`
  ${({type}) => types[type]};
  width: auto;
  min-height: 45px;
  height: auto;
  border-radius: ${({sharp}) => sharp ? 'none' : '3px'};
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  position: relative;

  > .type-icon {
    font-size: 21px;
    margin-bottom: -5px;
    padding: 0 10px 0 0;
  }

  > .close-icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }

  list-style-position: inside;
`