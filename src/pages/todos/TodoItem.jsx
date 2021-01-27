import React, { useEffect, useState } from 'react';
import { DataForm } from '@bsmp/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '../../recoil/atoms';
import { useUpdateItem } from '../../recoil/hooks';
import { activeIdState, activeItemState, todosState } from '../../recoil/atoms';
import { itemStateFormatted, charCountState, itemWithId } from '../../recoil/selectors';

export const TodoItem = ({ id }) => {
  const todos = useRecoilValue(todosState);
  const [activeId] = useRecoilState(activeIdState);
  const [item, setItem] = useRecoilState(activeItemState);
  const [itemFormatted] = useRecoilState(itemStateFormatted);
  // const [item, setItem] = useRecoilState(itemWithId);
  const updateItem = useUpdateItem(item)

  useEffect(() => {
    if(activeId)
      setItem(todos[activeId])
      console.log('itemFormatted',itemFormatted);
  }, [activeId]);

  const renderItem = () => {
    return Object.keys(itemFormatted).map((key,i) => (
      <div>:: {itemFormatted[key]}</div>
    ));
  };

  if(!itemFormatted) return(<h4>select an item first</h4>)

  return (
    <div>
      <h5 style={{ background: '#ccc', padding: '15px' }}>
        {'item: '+JSON.stringify(item)}
      </h5>
      <h5 style={{ background: '#ccc', padding: '15px' }}>
        {'itemFormatted: '+JSON.stringify(itemFormatted)}
      </h5>
      {renderItem()}
      <DataForm data={item} onFormSubmit={(formData) => {
           setItem({...item,...formData})
           todos[activeId] = {...todos[activeId],...item}
      }} />

    </div>
  );
};

export default TodoItem;
