import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import CharacterCounter from '../../components/characterCounter';
import { RecoilRoot, useRecoilState } from 'recoil';
import { activeItemState, todosState } from '../../recoil/atoms';

const TodosPage = (props) => {
  const [state, setState] = useState({});
  const [item, setItem] = useRecoilState(activeItemState);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={'container'}>
      <h4 style={{ background: '#ccc', padding: '15px' }}>
        {'TodosPage - activeitem: '+ item?.name}
      </h4>

      <TodoList />
      <CharacterCounter />

    </div>
  );
};

export default TodosPage;
