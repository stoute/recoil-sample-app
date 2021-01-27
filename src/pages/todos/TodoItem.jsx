import React, { useEffect, useState } from 'react';
import { DataForm } from '@bsmp/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '../../recoil/atoms';
import { activeIdState, todosState } from '../../recoil/atoms';
import { charCountState, itemWithId } from '../../recoil/selectors';

export const TodoItem = (props) => {
  // const [todo, setTodo] = useRecoilState(todoState);
  const todos = useRecoilValue(todosState);
  const [activeId, setActiveId] = useRecoilState(activeIdState);
  const [item, setItem] = useState();

  useEffect(() => {
    console.log('todos',todos);
    // console.log('item',item);
    // return () => {};
  }, []);
  useEffect(() => {
    console.log('activeId',activeId);
    if(activeId) setItem(todos[activeId])
  }, [activeId]);

  return (
    <div>
      <h3 style={{ background: '#ccc', padding: '15px' }}>
        {'activeId: '+activeId}
      </h3>
      <h3 style={{ background: '#ccc', padding: '15px' }}>
        {'item: '+JSON.stringify(item)}
      </h3>
      <DataForm data={item} onFormSubmit={(form) => {
          console.log(form);
      }} />

    </div>
  );
};

export default TodoItem;
