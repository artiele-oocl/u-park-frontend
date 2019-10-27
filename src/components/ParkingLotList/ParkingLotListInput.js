import React, {Component} from 'react'
import {Select} from 'react-materialize';

export default class ParkingLotListInput extends Component {

    state = {
        inputValue: 'Filter'
    };

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
        this.props.onSetFilter(event.target.value);
    };

    render() {
        return (
            <div className="todo-input">
                <Select value={this.state.inputValue} onChange={this.handleInputChange}>
                    <option value=""/>
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
