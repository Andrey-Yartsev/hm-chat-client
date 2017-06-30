export default (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_TARIFF':
      return Object.assign({}, state, {
        openedTariff: action.id
      });
    case 'OPEN_RESULT':
      return Object.assign({}, state, {
        openedResult: action.text
      });
    default:
      return state;
  }
};