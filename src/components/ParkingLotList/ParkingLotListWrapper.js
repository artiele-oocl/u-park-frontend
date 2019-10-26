import React, { Component } from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'
import { geolocated } from "react-geolocated"

export class ParkingLotListWrapper extends Component {

    setFilter = (filter) => {
        if (filter === 'Price') {
            this.props.filterParkingLotsByCriteria('Price');
        } else if (filter === 'Rating') {
            this.props.filterParkingLotsByCriteria('Rating');
        }
        this.forceUpdate();
    }

    setGeo = (latitude, longitude) => {
        // Returns Null at first fire, filtered to zero because backend api to get nearest crash if passed with null
        console.log("Latitude " + latitude)
        console.log("Longitude" + longitude)
        this.props.getNearestParkingLotsFromLocation(14.535600800000001, 120.999092);
    }

    render() {
        if (!this.props.isGeolocationEnabled) {
            return (
              <div>
                <h1>Please enable your GPS</h1>
              </div>    
            )  
        } else {
            const latitude = this.props.coords !== null ? this.props.coords && this.props.coords.latitude : 0
            const longitude = this.props.coords !== null ? this.props.coords && this.props.coords.longitude : 0
            this.setGeo(latitude, longitude)
        }
        
        return (
            <div>
                <ParkingLotListInput onSetFilter={this.setFilter} />
                <ParkingLotList parkingLotList={this.props.parkingLots} />
            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(ParkingLotListWrapper);
