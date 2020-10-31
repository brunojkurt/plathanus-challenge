import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { TSelect } from '.';

export const Wrapper = styled.div<{w100?: boolean}>`
  position: relative;
  height: 50px;
  overflow: hidden;
  width: fit-content;
  ${({ w100 }) => w100 && ({
    width: '100% !important'
  })}
`

export const SelectBase = styled.select<TSelect>`
  height: 100%;
  color: #000;
  padding-top: 20px;
  padding-right: 22px;
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;

  -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${({ w100 }) => w100 && ({
    width: '100%'
  })}

  &:focus + .label-name .content-name,
   &.filled + .label-name .content-name {
    transform: translateY(-175%);
    font-size: 11px;
    color: ${({ color }) => color ? color : colors['primary'] };
  }

  &:focus + .label-name::after {
    transform: translateX(0%);
  }

  option.placeholder {
    font-style: italic;
    background: rgba(0,0,0,0.07);
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

  > svg {
    position: absolute;
    right: 0;
    bottom: 5px;
    font-size: 1.3em;
  }
`