const initialState = {
    parkingLots: [],
    criteria: 'Default'
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "REFRESH_PARKING_LOTS":
            return {
                ...state,
                parkingLots: payload
            };
        case "GET_NEAREST_PARKING_LOTS":
            let orderedParkingLots1 = [];
            if (state.criteria === 'Default' || state.criteria === 'Distance') {
                orderedParkingLots1 = payload.sort((lotA, lotB) => parseFloat(lotA.distance) - parseFloat(lotB.distance));
            } else if (state.criteria === 'Price') {
                orderedParkingLots1 = payload.sort((lotA, lotB) => parseFloat(lotA.rate) - parseFloat(lotB.rate));
            } else if (state.criteria === 'Rating') {
                orderedParkingLots1 = payload.sort((lotA, lotB) => lotB.starRating - lotA.starRating);
            }
            return {
                ...state,
                parkingLots: orderedParkingLots1
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
                parkingLots: orderedParkingLots,
                criteria: payload
            };
        default:
            return state;
    }
}