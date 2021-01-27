import { atom } from 'recoil';
import memoize from '../utils/memoize';

export const todosState = atom({
  key: 'todosState',
  default: [
    { id: 0, name: 'Milch kaufen', done: false },
    { id: 1, name: 'Rasen mähen', done: false },
    { id: 2, name: 'Todo App Coden', done: true },
    { id: 3, name: 'Zug fahren', done: false },
    { id: 4, name: 'Schlafen gehen', done: true },
    { id: 5, name: 'Ferien machen', done: true },
    { id: 6, name: 'Lecker kochen', done: true },
    { id: 7, name: 'React Training', done: false },
  ],
});

export const todoState = atom({
  key: 'todoState',
  default: '',
});

export const activeIdState = atom({
  key: 'activeIdState',
  default: '',
});

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
