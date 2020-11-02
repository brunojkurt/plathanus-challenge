import styled from 'styled-components';

export const Appbar = styled.div<{ background?: string }>`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 64px;
  padding: 0 24px;
  background: ${({ background }) => background || 'transparent' };
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background-color 200ms;

  @media (max-width: 600px) {
    min-height: 48px;
    padding: 0 16px 0 16px;
  }
`