import styled, { css } from 'styled-components';
import { Container, colors, breakpoints } from '../../styles/global';

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: horizontal;
  height: 100%;

  @media screen and (max-width: ${breakpoints['sm']}) {
    display: none !important;
  }
`

export const MenuItemBorder = css`
  font-weight: 500;

  :before {
    content: " ";
    border: 3px solid ${colors['secondary']};
    z-index: 1;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    top: 0;
  }
`

export const MenuItem = styled.li<{selected?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  height: 100%;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  color: #FFF;

  :hover {
    font-weight: 500;
  }

  ${({selected}) => selected && MenuItemBorder }
`

export const Logo = styled.img`
  padding: 15px 0;
  max-height: 80px;

  @media screen and (max-width: ${breakpoints['sm']}) {
    height: 60px;
    width: auto;
  }
`

export const InputWrapper = styled.div`
  background-color: rgba(255,255,255,0.6);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 2px 5px;

  input {
    padding: 10px;
    border: none;
    background: transparent;
  }

  svg {
    font-size: 18px;
    margin-top: 8px;
    margin-right: 5px;
  }

  @media screen and (max-width: ${breakpoints['sm']}) {
    display: none !important;
  }
`

export const ContainerBase = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`