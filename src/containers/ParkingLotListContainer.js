import {connect} from 'react-redux'
import ParkingLotResource from '../api/ParkingLotResource';
import ParkingLotListWrapper from '../components/ParkingLotList/ParkingLotListWrapper';

const mapStateToProps = state => ({
    parkingLots: state.parkingLotResource.parkingLots,
    criteria: state.parkingLotResource.criteria
});

const mapDispatchToProps = dispatch => ({
    getNearestParkingLotsFromLocation: (latitude, longitude) => {
        ParkingLotResource.getNearestParkingLots(latitude, longitude)
            .then(res => res.json())
            .then(parkingLots => {
                dispatch({
                    type: 'GET_NEAREST_PARKING_LOTS',
                    payload: parkingLots
                })
            })
    },
    filterParkingLotsByCriteria: (criteria) => dispatch({
        type: 'FILTER_PARKING_LOTS',
        payload: criteria
    }),
    resetFilterCriteria: () => dispatch({
        type: 'RESET_FILTER'
    }),
    setSelectedParkingLot: (parkingLotId, userId) => {
        return ParkingLotResource.setSelectedParkingLot({parkingLotId: parkingLotId, userId: userId})
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'SET_PARK_HERE_DETAILS',
                    payload: res
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLotListWrapper)
