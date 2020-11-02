import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { TTextField } from '.';

export const Wrapper = styled.div<{w100?: boolean}>`
  position: relative;
  height: 50px;
  overflow: hidden;
  width: fit-content;
  ${({ w100 }) => w100 && ({
    width: '100% !important'
  })}
`

export const InputBase = styled.input<TTextField>`
  height: 100%;
  color: #000;
  padding-top: 20px;
  border: none;
  outline: none;
  font-size: 16px;

  ${({ w100 }) => w100 && ({
    width: '100%'
  })}

  &:focus + .label-name .content-name,
   :not(:placeholder-shown) + .label-name .content-name {
    transform: translateY(-175%);
    font-size: 11px;
    color: ${({ color }) => color ? color : colors['primary'] };
  }

  &:focus + .label-name::after {
    transform: translateX(0%);
  }
`

export const LabelBase = styled.label<{color?: string}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;
  color: #595f6e;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid ${({ color }) => color ? color : colors['primary'] };
    transform: translate(-100%);
    transition: all 0.2s ease;
  }

  > .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.2s ease;
    font-size: 1rem;
  }
`