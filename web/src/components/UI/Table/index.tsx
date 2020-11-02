import React, { useState, useEffect } from 'react';
import { TableWrapper, Table as TableBase, Head, Body, Label, Row, Cel, Loading } from './styles';
import { CircularLoading } from '../Css';
import { HiOutlineSortDescending, HiOutlineSortAscending } from 'react-icons/hi';

interface TLabel {
  name?: string;
  key: string;
}

interface TTable {
  labels: TLabel[];
  data: any[];
  shadow?: boolean;
  sharp?: boolean;
  onOrderChange?: (orderBy: string, currentSort: string) => void;
  loading?: boolean;
}

interface TState {
  orderBy?: string;
  currentSort: 'asc' | 'desc';
}

const cells = (labels: TLabel[], rowData: {[type: string]: any }) => {
  return labels.map((label, index) => {
    const key = labels[index].key;
    return (
      <Cel key={index}>{rowData[key]}</Cel>
    )
  })
}

const rows = (labels: TLabel[], data: any[]) => {
  return data.map((rowData, index) => {
    return (
      <Row key={index}>
        { cells(labels, rowData) }
      </Row>
    )
  })
}

const Table: React.FC<TTable> = (props) => {
  const { labels, data, shadow, sharp, onOrderChange, loading } = props;
  const [ orderState, setOrderState ] = useState<TState>({
    orderBy: undefined,
    currentSort: 'asc'
  })

  useEffect(() => {
    if(orderState.orderBy && onOrderChange) {
      onOrderChange(orderState.orderBy, orderState.currentSort);
    }
  }, [orderState.orderBy, orderState.currentSort, onOrderChange])

  const sortTypes: {[type: string]: any} = {
    asc: (a: any, b: any) => {
      if(!orderState.orderBy) { return 0 }
      if(a[orderState.orderBy] > b[orderState.orderBy]) { return 1 }
      if(a[orderState.orderBy] < b[orderState.orderBy]) { return -1 }
      return 0
    },

    desc: (a: any, b: any) => {
      if(!orderState.orderBy) { return 0 }
      if(a[orderState.orderBy] < b[orderState.orderBy]) { return 1 }
      if(a[orderState.orderBy] > b[orderState.orderBy]) { return -1 }
      return 0
    }
  }

  const changeOrderReference = (reference: string) => {
    setOrderState({
      orderBy: reference,
      currentSort: 'asc'
    })
  }

  const changeSortType = () => {
    const { currentSort } = orderState;

    setOrderState(state => {
      return {
        ...state,
        currentSort: currentSort === 'asc' ? 'desc' : 'asc'
      }
    })
  }

  const sortTable = (reference: string) => {
    if(reference === orderState.orderBy) {
      changeSortType();
    } else {
      changeOrderReference(reference);
    }
  }

  return (
    <TableWrapper
      sharp={sharp} 
      shadow={shadow}>
      <TableBase>
        <Head>
          <Row>
            {labels.map((label, index) => (
              <Label key={index} onClick={ () => sortTable(label.key) }>
                {label.name}
                {label.key === orderState.orderBy ? (
                  <span className="sort-icon">
                    { orderState.currentSort === 'asc' ? (
                      <HiOutlineSortDescending/>
                    ) : (
                      <HiOutlineSortAscending/>
                    )}
                  </span>
                ) : (
                  <span className="sort-icon hidden">
                    <HiOutlineSortDescending/>
                  </span>
                )}
              </Label>
            ))}
          </Row>
        </Head>
        <Body>
          { (!!data.length && !loading) &&
            rows(labels, data.sort(sortTypes[orderState.currentSort])) }
        </Body>
      </TableBase>
      { loading && (
        <Loading>
          <CircularLoading size="md"/>
        </Loading>
      )}
    </TableWrapper>
  );
}

export default Table;