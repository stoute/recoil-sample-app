import { useRecoilCallback, useRecoilState } from 'recoil';
import { itemWithId } from './selectors';
import { todoState,todosState } from './atoms';
// import { createNewShape } from './defaults';

export function useUpdateItem() {
  const [todo,setTodo] = useRecoilState(todoState);
  const [todos,setTodos] = useRecoilState(todosState);
  return useRecoilCallback(({set}) => async (newValue) => {
    console.log('useUpdateItem',newValue);
    if( newValue && newValue.id) {
      todos.forEach((item, i) => {
          if(item.id === newValue.id) {
            setTodo({...todo, ...newValue})
          }
      })
      // setItem({...item,...formData})
    }

      // set(itemWithId(newValue.id), newValue)
  });
}

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
