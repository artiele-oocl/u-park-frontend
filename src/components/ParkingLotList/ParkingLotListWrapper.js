import React, { Component } from 'react'
export class ParkingLotListWrapper extends Component {

    componentDidMount() {
        this.props.refreshParkingLots();
    }

    render() {
        return (
            <div>
                {console.log(this.props.parkingLots)}
            </div>
        )
    }
}

export default ParkingLotListWrapper
