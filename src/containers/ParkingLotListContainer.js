import {connect} from 'react-redux'
import ParkingLotResource from '../api/ParkingLotResource';
import ParkingLotListWrapper from '../components/ParkingLotList/ParkingLotListWrapper';

const mapStateToProps = state => ({
    parkingLots: state.parkingLotResource.parkingLots
});

const mapDispatchToProps =  dispatch => ({
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
          dispatch({
            type: 'GET_NEAREST_PARKING_LOTS',
            payload: parkinglots
          })
        })
      }
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLotListWrapper)
  