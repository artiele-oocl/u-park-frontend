import { connect } from 'react-redux'
import ParkingLotResource from '../api/ParkingLotResource';
import ParkingLotListWrapper from '../components/ParkingLotList/ParkingLotListWrapper';

const mapStateToProps = state => ({
    parkingLots: state.parkingLotResource.parkingLots
});

const mapDispatchToProps = dispatch => ({
    refreshParkingLots: () => {
        ParkingLotResource.getAll()
            .then(res => res.json())
            .then(parkinglots => {
                dispatch({
                    type: 'REFRESH_PARKING_LOTS',
                    payload: parkinglots
                })
            })
    },
    getNearestParkingLotsFromLocation: (latitude, longitude) => {
        ParkingLotResource.getNearestParkingLots(latitude, longitude)
            .then(res => res.json())
            .then(parkinglots => {
                // TODO: BUG FIXING
                // When no setTimeout here, after call in backend, 
                // it will return many list of parking lots (this.forceUpdate();) force updating the ParkingLotListWrapper 
                setTimeout(() => {
                    dispatch({
                        type: 'GET_NEAREST_PARKING_LOTS',
                        payload: parkinglots
                    })
                }, 1000 * 60);
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
