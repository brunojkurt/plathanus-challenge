import styled from 'styled-components';

export const Appbar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: #CCC;
  min-height: 64px;
  padding: 0 24px 0 24px;

  @media (max-width: 600px) {
    min-height: 48px;
    padding: 0 16px 0 16px;
  }
`