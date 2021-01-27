import memoize from '../utils/memoize';
import { selector } from 'recoil';
import { textState, todosState, activeItemState } from './atoms';

export const itemStateFormatted= selector({
  key: 'itemFormatted', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const item = get(activeItemState);
    let itemFormatted = {}
    if (!item) return null;
    Object.keys(item).forEach((k, i) => {
      itemFormatted[k] = item[k];
      if (k==='name') itemFormatted[k] = 'task = ' + item[k]
      if (k==='done') itemFormatted[k] = 'task done = ' + item[k]
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

