import React, { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { entitiesState, itemStateFormatted, itemWithId } from './selectors';
import { todoState, todosState, activeItemState, activeIdState } from './atoms';

export const useItemState = () => {
  const [state, setState] = useRecoilState(activeItemState);
  const [stateFormatted] = useRecoilState(itemStateFormatted);
  const [activeId] = useRecoilState(activeIdState);
  const [entities] = useRecoilState(entitiesState);
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    if(activeId) setState(entities[activeId])
  }, [activeId]);

  const updateState = async (updatedItem) => {

      // todo: result = await api update
      setTimeout(() => {
        let array = []
        todos.forEach((todo,i) => {
          array.push(todo)
          if(todo.id == updatedItem.id) array[i] = updatedItem
        })
        setTodos(array)
        setState({...state ,...updatedItem})

      },100)

  };

  return {
    state,
    setState,
    stateFormatted,
    activeId,
    updateState,
    entities
  };
};




//
// export function useUpdateItem() {
//   const [todo,setTodo] = useRecoilState(todoState);
//   const [todos,setTodos] = useRecoilState(todosState);
//   return useRecoilCallback(({set}) => async (newValue) => {
//     console.log('useUpdateItem',newValue);
//     if( newValue && newValue.id) {
//       todos.forEach((item, i) => {
//           if(item.id === newValue.id) {
//             setTodo({...todo, ...newValue})
//           }
//       })
//       // setItem({...item,...formData})
//     }
//       // set(itemWithId(newValue.id), newValue)
//   });
// }

//
// export function useNewItem() {
//   return useRecoilCallback(({snapshot: {getPromise}}) => async (shapeParam) => {
//     let id = createNewShape(shapeParam);
//     const item = await getPromise(itemWithId(id));
//
//     return item;
//   });
// }
//
// export function useLoadItems() {
//   return useRecoilCallback(({snapshot: {getPromise}}) => async (itemIds) => {
//     return await Promise.all(
//       itemIds.map(id => getPromise(itemWithId(id)))
//     );
//   }, []);
// }
//
// export function useUpdateItems() {
//   return useRecoilCallback(({set}) => async (newValue) => {
//     newValue.forEach(item => {
//       set(itemWithId(item.id), item);
//     })
//   }, []);
// }
