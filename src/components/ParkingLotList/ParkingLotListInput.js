import React, {Component} from 'react'
import {Select, Row, Col} from 'react-materialize';
import logo from "../../logo.png";

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

            <div className="todo-input" style={{marginLeft: '1rem', marginRight: '1rem'}}>
                <br></br>
                <Row>
                <img style={{ width: '120px', height: '70px'}} src={logo} alt='logo'/>
                </Row>
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
