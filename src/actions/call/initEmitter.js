export default (dispatch, emitter) => {
  let currentStatus = 'none';
  emitter.on('event', (status) => {
    if (currentStatus === status) return;
    console.log('STATUS: ' + status);
    currentStatus = status;
    switch (status) {
      case 'mngr_pickup':
        dispatch({
          type: 'SCREEN_CHANGE',
          screen: 'Calling'
        });
        break;
      case 'clnt_pickup':
        dispatch({
          type: 'SCREEN_CHANGE',
          screen: 'Talking'
        });
        break;
      case 'no_answer':
        // reset status, go to "no answer" screen and stop status emitter
        currentStatus = 'none';
        dispatch({
          type: 'SCREEN_CHANGE',
          screen: 'NoAnswer'
        });
        dispatch({
          type: 'WAIT_FOR_STATUS',
          waitForStatus: false
        });
        break;
      case 'hangup':
        // go to "hangup" screen and stop status emitter
        dispatch({
          type: 'SCREEN_CHANGE',
          screen: 'Hangup'
        });
        dispatch({
          type: 'WAIT_FOR_STATUS',
          waitForStatus: false
        });
        break;
      default:
        throw new Error('Logic for status "' + status + '" is not implemented');
    }
  });
};