import React, { Component } from 'react'
import ParkingLotList from './ParkingLotList'
import ParkingLotListInput from './ParkingLotListInput'
export class ParkingLotListWrapper extends Component {

    componentDidMount() {
        this.props.getNearestParkingLotsFromLocation(14.535600800000001, 120.999092);
    }

    render() {
        return (
            <div>
                <ParkingLotListInput onNewTodoAdded={this.addNewTodo} onToggleFilter={this.toggleTodoFilterWrapper} />
                <ParkingLotList parkingLotList={this.props.parkingLots} />
            </div>
        )
    }
}

export default ParkingLotListWrapper
