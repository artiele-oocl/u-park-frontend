import React, {Component} from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'
import gpsNotAvailable from '../../gpsNotAvailable.png'

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
        this.props.filterParkingLotsByCriteria('Default');
    };

    setFilter = (filter) => {
        if (filter === 'Price') {
            this.props.filterParkingLotsByCriteria('Price');
        } else if (filter === 'Rating') {
            this.props.filterParkingLotsByCriteria('Rating');
        } else {
            this.props.filterParkingLotsByCriteria('Default');
        }
        this.forceUpdate();
    };

    render() {
        if (!this.state.isGeolocationAvailable) {
            return (
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={gpsNotAvailable}/>
                    <br></br>
                    <p>
                        PLEASE TURN ON YOUR GPS
                    </p>
                </div>

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