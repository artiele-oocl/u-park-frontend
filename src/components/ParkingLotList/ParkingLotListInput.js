import React, {Component} from 'react'
import {Select, Row, Autocomplete, Badge, Icon} from 'react-materialize';
import logo from "../../logo.png";
import LocationResource from '../../api/LocationResource';

export default class ParkingLotListInput extends Component {

    state = {
        sortCriteria: 'Default',
        locations: null,
        manualSearch: '',
    };

    componentDidMount() {
        this.getLocations();
    }

    handleInputChange = (event) => {
        this.setState({sortCriteria: event.target.value});
        this.props.onSetFilter(event.target.value);
    };

    onChangeManualLocation = (chosenLocation) => {
        this.props.onSetManualLocation(chosenLocation);
        this.setState({manualSearch: chosenLocation})
    };

    getLocations = () => {
        LocationResource.getAll()
            .then(res => res.json())
            .then(res => {
                const mapped = res.map(item => ({[item.name]: null}));
                const newObj = Object.assign({}, ...mapped);
                this.setState({locations: newObj})
            });
    };

    clearInput = (event) => {
        if (event.target.value === '') {
            this.props.onSetManualLocation('');
            this.setState({manualSearch: ''})
        }
    };

    render() {
        if (!this.state.locations) {
            return <div/>
        }

        return (

            <div style={{marginLeft: '1rem', marginRight: '1rem'}}>
                <br/>
                <Row>
                    <img style={{width: '120px', height: '70px'}} src={logo} alt='logo'/>
                </Row>

                <Autocomplete options={{data: this.state.locations, onAutocomplete: this.onChangeManualLocation}}
                              placeholder="Choose your location"
                              onChange={this.clearInput}/>
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
                {!this.state.manualSearch ? null :
                    <div>
                        <Badge style={{fontWeight: 'bold', fontSize: '12px'}} className="teal" caption="" newIcon>
                            {this.state.manualSearch}
                        </Badge>
                    </div>
                }
            </div>
        )
    }
}
