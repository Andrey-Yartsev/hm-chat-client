import authRequest from '../../core/utils/authRequest';

export default (success, error) => {
  return (dispatch, state, lineId) => {
    dispatch({
      type: 'UPDATE_CHAT',
      lineId
    });
    authRequest(state, {
      method: 'get',
      path: 'client/messages'
    }).then((r) => {
      dispatch({
        type: 'SET_MESSAGES',
        messages: r.data
      });
      dispatch({
        type: 'CHAT_LOADED'
      });
      success(r.data);
    });
  };
};