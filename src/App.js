import React from 'react';
import { RecoilRoot } from 'recoil';
import TodosPage from './pages/todos/TodosPage';
import CharacterCounter from './components/characterCounter';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodosPage />
    </RecoilRoot>
  );
}

export default App;
