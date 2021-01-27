import React, { useEffect, useState } from 'react';
import { DataForm } from '@bsmp/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '../../recoil/atoms';
import { useUpdateItem } from '../../recoil/hooks';
import { activeIdState, activeItemState, todosState } from '../../recoil/atoms';
import { charCountState, itemWithId } from '../../recoil/selectors';

export const TodoItem = (props) => {
  const todos = useRecoilValue(todosState);
  const [activeId, setActiveId] = useRecoilState(activeIdState);
  const [item, setItem] = useRecoilState(activeItemState);
  const updateItem = useUpdateItem()

  useEffect(() => {
    if(activeId) {
      setItem(todos[activeId])
      updateItem(item)
    }
  }, [activeId]);

  if(!item) return(<h4>select an item first</h4>)

  return (
    <div>
      <h5 style={{ background: '#ccc', padding: '15px' }}>
        {'item: '+JSON.stringify(item)}
      </h5>
      <DataForm data={item} onFormSubmit={(formData) => {
          setItem({...item,...formData})
           todos[activeId] = {...todos[activeId],...item}
      }} />

    </div>
  );
};

export default TodoItem;
