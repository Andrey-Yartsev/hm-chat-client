export default (state = {}, action) => {
  let newState, currentMessages;
  switch (action.type) {
    case 'INIT_MESSAGES':
      return Object.assign({}, state, {
        messages: {}
      });
    case 'SET_MESSAGES':
      return Object.assign({}, state, {
        messages: action.messages.reverse()
      });
    case 'NEW_MESSAGE':
      if (state.lastMessageId &&
        state.lastMessageId === action.message._id) {
        return state;
      }
      newState = Object.assign({}, state);
      newState.lastMessageId = action.message._id;
      newState.messages.push(action.message);
      return newState;

    default:
      return state;
  }
};