import styled from 'styled-components';
import { TCheckbox } from './index';
import { colors } from '../../../styles/global';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<TCheckbox>`
  position: absolute;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  margin-top: -2px;
  opacity: 0;
  cursor: pointer;

  ${props => props.disabled && {
    cursor: 'default'
  }}
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`

export const StyledCheckbox = styled.div<TCheckbox>`
  display: inline-block;
  width: 19px;
  height: 19px;
  border: 2px solid ${props => props.checked ? (props.color || colors['primary']) : 'rgba(0, 0, 0, 0.54)'};
  border-radius: 3px;
  transition: all 150ms;
  pointer-events: none;

  background: ${props => props.checked ? (props.color || colors['primary']) : '#FFF'};

  ${props => props.disabled && {
    background: 'rgba(0,0,0,0.54) !important',
    border: '2px solid transparent !important'
  }}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.34);
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`