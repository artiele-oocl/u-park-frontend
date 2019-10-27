const initialState = {
    user: {},
    isLogIn: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'LOG_IN':
            if (payload.id) {
                alert("Login Successful");
                return {
                    ...state,
                    user: payload,
                    isLogIn: true
                }
            }
            return {
                ...state,
                user: {},
                isLogIn: false
            };
        default:
            return state;
    }
};
