const reducer = function(state = {
    events: []
}, action) {
    switch(action.type) {
        case 'GET_EVENTS':
            localStorage.setItem('token', action.payload.token);
            return Object.assign({}, state, {
                events: action.payload
            });
        case 'POST_EVENT':
            return Object.assign({}, state, {
                title: action.payload.title
            });
        default:
            return state;
    }
};

export default reducer;