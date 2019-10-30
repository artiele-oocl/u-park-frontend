
const initialState = {
    checkOut: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_ACTIVE_TRANSACTION':
            return {
                ...state,
                ...state.checkOut = payload
            }

        case 'UPDATE_CHECKOUT_STATE':
            return {
                ...state,
                ...state.checkOut = payload
            }

        default:
            return state;
    }
};
