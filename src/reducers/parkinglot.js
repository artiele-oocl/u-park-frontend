const initialState = {
    parkingLots: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "REFRESH_PARKING_LOTS":
            return {
                ...state,
                parkingLots: payload,
            };
        case "GET_NEAREST_PARKING_LOTS":
            return {
                ...state,
                parkingLots: payload,
            };
        default:
            return state;
    }
}