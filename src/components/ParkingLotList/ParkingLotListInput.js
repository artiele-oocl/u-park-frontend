import React, { Component } from 'react'
import { Select, TextInput } from 'react-materialize';

export default class ParkingLotListInput extends Component {

    state = {
        sortCriteria: 'Default',
        manualLocation: 'None'
    };

    handleInputChange = (event) => {
        this.setState({ sortCriteria: event.target.value });
        this.props.onSetFilter(event.target.value);
    };

    onChangeManualLocation = (event) => {
        this.setState({ manualLocation: event.target.value });
        this.props.onSetManualLocation(event.target.value);
    }

    render() {
        return (
            <div className="todo-input">
                <TextInput type="text" placeholder="Choose your location"
                    onChange={this.onChangeManualLocation} />
                <Select value={this.state.sortCriteria} onChange={this.handleInputChange}>
                    <option value="Default" disabled>
                        Sort by...
                    </option>
                    <option value="Distance">
                        Distance
                    </option>
                    <option value="Price">
                        Price
                    </option>
                    <option value="Rating">
                        Rating
                    </option>
                </Select>
            </div>
        )
    }
}
