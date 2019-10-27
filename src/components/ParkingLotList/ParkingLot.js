import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

export default class ParkingLot extends Component {
    render() {
        const {parkingLot} = this.props;
        return (
            <div>
                <Row>
                    <Col style={{float: 'left', textAlign: 'left'}}>
                        {parkingLot.name}
                        <br/>
                        <span style={{fontSize: '11px'}}>{parseFloat(parkingLot.distance).toFixed(2)} km</span>
                    </Col>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        ₱{parkingLot.rate}/hr
                    </Col>
                </Row>
            </div>
        )
    }
};