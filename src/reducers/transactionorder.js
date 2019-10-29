const initialState = {
    transactionOrders: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_TRANSACTION_ORDERS":
            return {
                ...state,
                transactionOrders: payload
            };
        default:
            return state;
    }
}