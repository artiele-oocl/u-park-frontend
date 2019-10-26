const initialState = {
    user: {},
    isLogIn: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'LOG_IN':
            if (payload.id !== null) {
                alert("Login Successful");
                return {
                    ...state,
                    user: payload,
                    isLogIn: true
                }
            }
            break;
        default:
            return state;
    }
};
