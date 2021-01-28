import memoize from '../utils/memoize';
import { selector } from 'recoil';
import { textState, todosState, activeItemState } from './atoms';
import {todoFormatter} from '../utils/todoFormatter';

// export const entitiesState = selector(id => selector({
//   key: `enttity${id}`,
//   get: ({ get }) => {
//     let entities = {}
//     get(todosState).forEach((todo) => {
//       entities[todo.id] = todo
//     })
//     if(id) return entities[id]
//     return entities;
//   }
// }));

export const entitiesState= selector({
  key: 'entitiesState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    let entities = {}
    get(todosState).forEach((todo) => {
      entities[todo.id] = todo
    })
    // if(id) return entities[id]
    return entities;
  },
});

export const itemStateFormatted= selector({
  key: 'itemFormatted', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const item = get(activeItemState);
    let itemFormatted = {}
    if (!item) return null;
    Object.keys(item).forEach((k, i) => {
      itemFormatted[k] = todoFormatter(k,item)
    });
    return itemFormatted;
  },
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const itemWithId = selector(id => selector({
  key: `item${id}`,
  get: ({ get }) => {
    console.log('get selector: itemWithId',itemWithId);
    const todos = get(todosState)
    todos.forEach((item) => {
      if (item.id === id)  return  item
    })
  },
  set: ({ set }, newValue) => {
    console.log('set itemWithId ',newValue);
    // const state = privateItemStateWithId(id);
    set(activeItemState, newValue);
  }
}));

// export const itemWithId = memoize(id => selector({
//   key: `item${id}`,
//   get: ({ get }) => {
//     todosState.forEach((item) => {
//         if (item.id === id)  return  item
//     })
//   },
//   // set: ({ set }, newValue) => {
//   //   const state = privateItemStateWithId(id);
//   //   set(state, newValue);
//   // }
// }));

