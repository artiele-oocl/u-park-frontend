const initialState = {
    user: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'PATCH':
            return {
                ...state,
                user: [...state.users, payload]
            };
        default:
            return state;
    }
}
