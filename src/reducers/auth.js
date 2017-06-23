export default (state = {}, action) => {

    switch (action.type) {
        case 'SET_AUTH':
            return Object.assign({}, state, {
                token: action.token,
                login: action.login,
                profileId: action.profileId,
            });
        case 'LOGOUT':
            let _state = Object.assign({}, state);
            delete _state.token;
            return _state;
        default:
            return state;
    }

};