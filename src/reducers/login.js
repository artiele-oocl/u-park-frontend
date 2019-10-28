const initialState = {
    user: {},
    isLogIn: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'LOG_IN':
            if (payload.id) {
                sessionStorage['u-park-user-information'] = JSON.stringify(payload);
                window.location.href = "/parkinglotlist";
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
