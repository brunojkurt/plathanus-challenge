import styled, { css } from 'styled-components';

export const TableWrapper = styled.div<{ shadow?: boolean, sharp?: boolean}>`
  width: 100%;
  height: auto;

  ${({sharp}) => !sharp && RadiusCss }

  ${({shadow}) => shadow && ShadowCss }
`

const ShadowCss = css`
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.5);
`

const RadiusCss = css`
  border-radius: 4px;
`

export const Table = styled.table`
  width: 100%;
  background: #FFF;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  tr:last-child {
    border-bottom: none;
  }
`

export const Head = styled.thead`
  border-bottom: 1px solid rgba(0,0,0,0.2);
`

export const Body = styled.tbody`
  tr:hover {
    background: rgba(0,0,0,0.04)
  }
`

export const Label = styled.th`
  cursor: pointer;
  text-align: left;
  padding: 15px;
  
  color: rgba(0,0,0);

  > .sort-icon {
    font-size: 17px;
    svg {
      margin-left: 3px;
      margin-bottom: -4px;
    }
  }

  > .sort-icon.hidden {
    color: rgba(0,0,0,0.6);
    opacity: 0;
  }

  :hover {
    color: rgba(0,0,0,0.7);
    > .sort-icon.hidden {
      opacity: 1;
    }
  }
`

export const Row = styled.tr`
  
`

export const Cel = styled.td`
  padding: 15px;
`

export const Loading = styled.div`
  background: #FFF;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`