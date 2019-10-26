import React, { Component } from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'
export class ParkingLotListWrapper extends Component {

    componentDidMount() {
        this.props.getNearestParkingLotsFromLocation(14.535600800000001, 120.999092);
    }

    setFilter = (filter) => {
        if (filter === 'Price') {
            this.props.filterParkingLotsByCriteria('Price');
        } else if (filter === 'Rating') {
            this.props.filterParkingLotsByCriteria('Rating');
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <ParkingLotListInput onSetFilter={this.setFilter} />
                <ParkingLotList parkingLotList={this.props.parkingLots} />
            </div>
        )
    }
}

export default ParkingLotListWrapper
