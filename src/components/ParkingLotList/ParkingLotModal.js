import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';

export default class ParkingLotModal extends Component {
    render() {
        const {parkingLot} = this.props;
        return (
            <div>
                <Row>
                    <Col style={{float: 'left', textAlign: 'left'}}>
                        {parkingLot.name}
                    </Col>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        <span style={{fontSize: '11px'}}>{parseFloat(parkingLot.distance).toFixed(2)} km</span>
                    </Col>
                    <Col m={6} s={12}>
                        <Button  style={{marginRight: '5px', marginTop: '2rem', width: '100%'}}> Park Here </Button>
                    </Col>
                    <Col m={6} s={12}>
                        <Button style = {{marginRight: '5px', marginTop: '2rem', width: '100%'}}> Open in Waze </Button>
                    </Col>
                </Row>
            </div>
        )
    }
};