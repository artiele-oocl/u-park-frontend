import React, { Component } from 'react'
import ParkingLot from './ParkingLot'
export class ParkingLotList extends Component {

    render() {
        const { parkingLotList } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                    {parkingLotList.map((parkingLot, i) =>
                        <tr>
                            <ParkingLot parkingLot={parkingLot} />
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ParkingLotList
