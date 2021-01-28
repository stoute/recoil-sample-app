
export const todoFormatter = (fieldName, state) => {
  let formatted
  const field = fieldName;
  switch (field) {
    // case 'name':
    //   // formatted = moment(state[field]).format('HH:mm');
    //   break;
    case 'done':
      formatted = 'nope'
      if(state.done) formatted = 'yep';
      break;
    default:
      formatted = state[field]
  }
  return formatted;
};
