import React, {Component} from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'

export class ParkingLotListWrapper extends Component {

    state = {
        isGeolocationAvailable: false
    };

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setGeoLocation);
        }
    }

    setGeoLocation = (position) => {
        this.setState({isGeolocationAvailable: true});
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.props.getNearestParkingLotsFromLocation(latitude, longitude);
    };

    setFilter = (filter) => {
        if (filter === 'Price') {
            this.props.filterParkingLotsByCriteria('Price');
        } else if (filter === 'Rating') {
            this.props.filterParkingLotsByCriteria('Rating');
        }
        this.forceUpdate();
    };

    render() {
        if (!this.state.isGeolocationAvailable) {
            return (
                <div>GPS not available</div>
            )
        }
        return (
            <div>
                <ParkingLotListInput onSetFilter={this.setFilter}/>
                <ParkingLotList parkingLotList={this.props.parkingLots}/>
            </div>
        )
    }
}

export default ParkingLotListWrapper;