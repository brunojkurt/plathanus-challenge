import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f9f9f9;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 280px;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`