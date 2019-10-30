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
        case "TOP_UP_WALLET":
            return {
                ...state,
                user: payload,
            };
        case "GET_USER_INFORMATION":
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}
