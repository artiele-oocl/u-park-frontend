import React, { Component } from 'react'
import ParkingLot from './ParkingLot'
export class ParkingLotList extends Component {
    
    render() {
        const {parkingLotList} = this.props;
        return (
            <div>
            {parkingLotList.map((parkingLot, i) =>
                <li key={i}>
                    <ParkingLot parkingLot={parkingLot}/>
                </li>
            )}
            </div>
            
        )
    }
}

export default ParkingLotList
