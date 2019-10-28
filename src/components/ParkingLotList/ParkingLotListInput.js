import React, { Component } from 'react'
import { Select, Autocomplete } from 'react-materialize';
import LocationResource from '../../api/LocationResource';

export default class ParkingLotListInput extends Component {

    state = {
        sortCriteria: 'Default',
        manualLocation: 'None',
        locations: null
    };

    componentDidMount() {
        this.getLocations();
    }

    handleInputChange = (event) => {
        this.setState({ sortCriteria: event.target.value });
        this.props.onSetFilter(event.target.value);
    };

    onChangeManualLocation = (event) => {
        this.setState({ manualLocation: event.target.value });
        this.props.onSetManualLocation(event.target.value);
    }

    getLocations = () => {
        LocationResource.getAll()
            .then(res => res.json())
            .then(res => {
                var mapped = res.map(item => ({ [item.name]: null }) );
                var newObj = Object.assign({}, ...mapped );
                this.setState({locations:newObj})
            });
    }

    render() {
        if (!this.state.locations) {
            return <div />
        }
        return (
            <div className="todo-input">
                <Autocomplete options={{data:this.state.locations}} placeholder="Choose your location" onChange={this.getLocations}/>
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
