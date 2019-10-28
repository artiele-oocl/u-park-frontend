import React, {Component} from 'react'
import {Select} from 'react-materialize';

export default class ParkingLotListInput extends Component {

    state = {
        inputValue: 'Default'
    };

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
        this.props.onSetFilter(event.target.value);
    };

    render() {
        return (
            <div className="todo-input">
                <Select value={this.state.inputValue} onChange={this.handleInputChange}>
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
