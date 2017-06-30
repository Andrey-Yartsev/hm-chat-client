export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_TARIFFS':
      return Object.assign({}, state, {
        items: action.items
      });
    default:
      return state;
  }
};