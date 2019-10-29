
const initialState = {
    activeTransaction: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_ACTIVE_TRANSACTION':
            return {
                ...state,
                activeTransaction: payload
            }

        default:
            return state;
    }
};
