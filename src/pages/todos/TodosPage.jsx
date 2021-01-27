import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

const TodosPage = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h3 style={{ background: '#ccc', padding: '15px' }}>
        {'TodosPage - placeholder'}
      </h3>

      <TodoList />

    </div>
  );
};

export default TodosPage;
