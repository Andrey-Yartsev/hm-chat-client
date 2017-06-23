export default (dispatch, lineId) => {
    dispatch({
        type: 'MARK_MESSAGES_VIEWED',
        lineId
    });
};
