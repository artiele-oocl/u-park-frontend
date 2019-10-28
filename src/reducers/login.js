import * as M from "materialize-css";

const initialState = {
    user: {},
    isLogIn: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'LOG_IN':
            if (payload.id) {
                return {
                    ...state,
                    user: payload,
                    isLogIn: true
                }
            }
            M.toast({html: 'Invalid Login'});
            return {
                ...state,
                user: {},
                isLogIn: false
            };
        default:
            return state;
    }
};
