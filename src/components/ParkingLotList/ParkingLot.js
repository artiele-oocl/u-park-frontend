import React, { Component } from 'react';

export default class ParkingLot extends Component {
    render() {
        const { parkingLot } = this.props;
        return (
            <td>
                {console.log(parkingLot.latitude + " | " + parkingLot.longitude)}
                <label>{parkingLot.name}|{parkingLot.distance} </label>
            </td>
        )
    }
}
