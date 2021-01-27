import memoize from '../utils/memoize';
import { selector } from 'recoil';
import { textState, todosState } from './atoms';

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
    todosState.forEach((item) => {
      if (item.id === id)  return  item
    })
  },
  // set: ({ set }, newValue) => {
  //   const state = privateItemStateWithId(id);
  //   set(state, newValue);
  // }
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

