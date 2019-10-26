import React, { Component } from 'react'
import ParkingLotList from './ParkingLotList'
export class ParkingLotListWrapper extends Component {

    componentDidMount() {
        this.props.getNearestParkingLotsFromLocation(14.535600800000001, 120.999092);
    }

    render() {
        return (
            <div>
                <ParkingLotList parkingLotList={this.props.parkingLots}/>
            </div>
        )
    }
}

export default ParkingLotListWrapper
