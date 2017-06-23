export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CHAT':
            if (state.lineId === action.lineId) {
                return state;
            }
            return Object.assign({}, state, {
                lineId: action.lineId,
                loading: true
            });
        case 'CHAT_LOADED':
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};