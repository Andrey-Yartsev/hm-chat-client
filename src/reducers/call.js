export default (state = {}, action) => {

  switch (action.type) {
    case 'WAIT_FOR_STATUS':
      let data = {
        waitForStatus: action.waitForStatus
      };
      if (action.connectionId) {
        data.connectionId = action.connectionId;
      }
      return Object.assign({}, state, data);
    case 'STATUS_CHANGE':
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }

};
