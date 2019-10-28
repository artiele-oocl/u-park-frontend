import React, {Component} from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'
import LocationResource from '../../api/LocationResource';

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

    setManualLocation = (manualLocationName) => {
        if(manualLocationName == undefined || manualLocationName == '') {
            this.componentDidMount();
        } else {
            LocationResource.findByName(manualLocationName)
            .then(res => res.json())
            .then(res => {
                if (res.length > 0) {
                    res.map(loc => {
                        const latitude = loc.latitude;
                        const longitude = loc.longitude;
                        this.props.getNearestParkingLotsFromLocation(latitude, longitude);
                        this.props.filterParkingLotsByCriteria('Default');
                    })
                }else{
                    this.props.getNearestParkingLotsFromLocation(0, 0);
                    this.props.filterParkingLotsByCriteria('Default');
                }
            });
        }
    }

    render() {
        if (!this.state.isGeolocationAvailable) {
            return (
                <div>GPS not available</div>
            )
        }
        return (
            <div>
                <ParkingLotListInput onSetFilter={this.setFilter} onSetManualLocation={this.setManualLocation}/>
                <ParkingLotList parkingLotList={this.props.parkingLots}/>
            </div>
        )
    }
}

export default ParkingLotListWrapper;