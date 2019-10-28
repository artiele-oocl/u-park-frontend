const initialState = {
    parkingLots: []
};

export default (state = initialState, {type, payload}) => {
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
            if (payload === 'Default' || payload === 'Distance') {
                orderedParkingLots = state.parkingLots.sort((lotA, lotB) => parseFloat(lotA.distance) - parseFloat(lotB.distance));
            } else if (payload === 'Price') {
                orderedParkingLots = state.parkingLots.sort((lotA, lotB) => parseFloat(lotA.rate) - parseFloat(lotB.rate));
            } else if (payload === 'Rating') {
                orderedParkingLots = state.parkingLots.sort((lotA, lotB) => lotB.starRating - lotA.starRating);
            }
            return {
                ...state,
                parkingLots: orderedParkingLots
            };
        default:
            return state;
    }
}