import React, { Component } from 'react';

export default class ParkingLot extends Component {
    render() {
        const { parkingLot } = this.props;
        return (
          <div>
            <div>
              <label>{parkingLot.name}|{parkingLot.latitude}|{parkingLot.longitude} </label>
            </div>
          </div>
        )
      }
    }
    