import React, { Component } from 'react'
import {Select} from 'react-materialize';

export default class ParkingLotListInput extends Component {

    state = {
        inputValue: 'Filter'
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
        this.props.onSetFilter(event.target.value);
    };

    dispatch = () => {
        this.props.onNewTodoAdded(this.state.inputValue);
        this.setState({ inputValue: '' })
    };

    toggleFilter = (e) => {
        this.props.onToggleFilter(e.target.checked);
    }

    render() {
        return (
            <div className="todo-input" >
                <Select value="" onChange={this.handleInputChange}>
                    <option value="" disabled>
                        {this.state.inputValue}
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
