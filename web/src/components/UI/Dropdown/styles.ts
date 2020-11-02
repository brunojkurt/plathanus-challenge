import styled from 'styled-components';

interface DropdownProps {
  open: boolean;
}

export const Dropdown = styled.div<DropdownProps>`
  position: relative;
  width: fit-content;
  cursor: pointer;
  > .content {
    display: ${props => props.open ? 'block' : 'none' };
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-top: 10px;
    z-index: 1;
  }
`