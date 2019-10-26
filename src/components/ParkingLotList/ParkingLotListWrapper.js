import React, { Component } from 'react'
import ParkingLotList from './ParkingLotList'
export class ParkingLotListWrapper extends Component {

    componentDidMount() {
        this.props.refreshParkingLots();
    }

    render() {
        return (
            <div>
                {console.log(this.props.parkingLots)}
                <ParkingLotList parkingLotList={this.props.parkingLots}/>
            </div>
        )
    }
}

export default ParkingLotListWrapper
