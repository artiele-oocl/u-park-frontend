import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import StarRatings from "react-star-ratings";
import parkinglot from "../../reducers/parkinglot";

export default class ParkingLotModal extends Component {
    state = {
        parkingLot: this.props.parkingLot
    }

    selectedParkingLot = () =>{
        this.props.selectParkingLot(this.state.parkingLot);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col style={{float: 'left', textAlign: 'left'}}>
                        {this.state.parkingLot.name}
                    </Col>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        <span style={{fontSize: '11px'}}>{parseFloat(this.state.parkingLot.distance).toFixed(2)} km</span>
                    </Col>
                    <br/>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        <StarRatings
                            rating={this.state.parkingLot.starRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="12px"
                            starSpacing="0.5px"
                            name='rating'>

                        </StarRatings>
                    </Col>
                    <Col m={6} s={12}>
                        <Button style={{marginRight: '5px', marginTop: '2rem', width: '100%'}} onClick={this.selectedParkingLot}> Park Here </Button>
                    </Col>
                    <Col m={6} s={12}>
                        <Button style={{marginRight: '5px', marginTop: '5px', width: '100%'}}> Open in Waze </Button>
                    </Col>
                </Row>
            </div>
        )
    }

};