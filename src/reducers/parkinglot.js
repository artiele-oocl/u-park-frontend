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
        case "FILTER_PARKING_LOTS":
            let orderedParkingLots = [];
            if (payload === 'Price') {
                orderedParkingLots = state.parkingLots.sort((lotA, lotB) => (lotA.price > lotB.price) ? 1 : -1)
            } else if (payload === 'Rating') {
                orderedParkingLots = state.parkingLots.sort((lotA, lotB) => (lotA.rating < lotB.rating) ? 1 : -1)
            }
            return {
                ...state,
                parkingLots: orderedParkingLots
            };
        default:
            return state;
    }
}