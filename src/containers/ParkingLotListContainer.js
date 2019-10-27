import {connect} from 'react-redux'
import ParkingLotResource from '../api/ParkingLotResource';
import ParkingLotListWrapper from '../components/ParkingLotList/ParkingLotListWrapper';

const mapStateToProps = state => ({
    parkingLots: state.parkingLotResource.parkingLots
});

const mapDispatchToProps = dispatch => ({
    refreshParkingLots: () => {
        ParkingLotResource.getAll()
            .then(res => res.json())
            .then(parkingLots => {
                dispatch({
                    type: 'REFRESH_PARKING_LOTS',
                    payload: parkingLots
                })
            })
    },
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
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLotListWrapper)