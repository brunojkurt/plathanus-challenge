import styled from 'styled-components';

export const CollapseContainer = styled.div<{collapsed?: boolean}>`
  width: 100%;
  height: auto;
  overflow: hidden;

  max-height: ${({ collapsed }) => collapsed ? '1000px' : '0'};
  transition: max-height 300ms ease-in-out;
`