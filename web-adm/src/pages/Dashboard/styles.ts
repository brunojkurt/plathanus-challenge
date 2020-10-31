import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

interface MenuProps {
  open: boolean;
  openMobile: boolean;
}

export const Menu = styled.div<MenuProps>`
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 0.5px solid rgba(0,0,0,0.2);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  color: ${colors['primary']};
  @media (max-width: 960px) {
    transform: ${({ openMobile }) => openMobile ? 'translateX(0)' : 'translateX(-100%)'};
  }
  transition: transform 0.3s ease-in-out;

  > .logo {
    width: 100%;
    height: 70px;
    text-align: center;
  }

  > .menu-list {
    margin-top: 30px;
    width: 100%;

    a {
      text-decoration: none;
      color: inherit;
    }

    li {
      display: flex;
      align-items: center;
      list-style: none;
      width: 100%;
      height: 50px;
      padding: 0 10px 0 10px;
      margin: 10px 0 10px 0;
      border-radius: 3px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;
      :hover {
        background: #f9f9f9;
      }

      > .icon {
        font-size: 21px;
        padding-right: 10px;
        display: flex;
        vertical-align: middle;
      }
    }
  }
`

interface TDroppableItem {
  toggle?: boolean;
}

export const DroppableItem = styled.div<TDroppableItem>`
  max-height: ${({ toggle }) => toggle ? 'auto' : '50px' };

  > li {
    > .dropdown {
      position: absolute;
      right: 0;
      padding-right: 15px !important; 
      transition: transform 0.2s;
      transform-origin: 30%;
      transform: ${({ toggle }) => toggle ? 'rotate(180deg)' : 'none' };
    }
  }

  > .content {
    padding-left: 15px;
    overflow: hidden;
    height: ${({ toggle }) => toggle ? '100%' : '0' };
  }
`

interface ContentProps {
  shrink: boolean;
  shrinkMobile: boolean;
}

export const Content = styled.div<ContentProps>`
  float: right;
  height: 100%;
  width: ${({ shrink }) => shrink ? 'calc(100% - 260px)' : '100%'};
  @media (max-width: 960px) {
    width: 100%;
    transform: ${({ shrinkMobile }) => !shrinkMobile ? 'none' : 'translateX(260px)'};
  }
  transition: all 0.3s ease-in-out;
  background: #f9f9f9;
`

export const Bar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 64px;
  padding: 0 24px 0 24px;

  @media (max-width: 960px) {
    min-height: 48px;
    padding: 0 16px 0 16px;
  }

  > .right {
    margin-left: auto;
  }
`

export const BarButton = styled.div`
  color: ${colors['primary']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  transition: background-color 0.1s ease-in-out;
`