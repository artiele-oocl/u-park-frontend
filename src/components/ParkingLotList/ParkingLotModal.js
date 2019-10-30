import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";

export default class ParkingLotModal extends Component {

    selectedParkingLot = () => {
        this.props.selectParkingLot(this.props.parkingLot.id);
    };

    render() {
        return (
            <div>
                <Row>
                    <Col style={{float: 'left', textAlign: 'left'}}>
                        {this.props.parkingLot.name}
                        <br/>
                        <span style={{fontSize: '11px'}}>{parseFloat(this.props.parkingLot.distance).toFixed(2)} km</span>
                    </Col>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        ₱{this.props.parkingLot.rate}/hr
                    </Col>
                    <br/>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        <StarRatings
                            rating={this.props.parkingLot.starRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="12px"
                            starSpacing="0.5px"
                            name='rating'>
                        </StarRatings>
                    </Col>
                    <Col m={6} s={12}>
                        <Link to='/checkout'>
                            <Button style={{marginRight: '5px', marginTop: '2rem', width: '100%'}}
                                    onClick={this.selectedParkingLot}> Park Here </Button>
                        </Link>
                    </Col>
                    <Col m={6} s={12}>
                        <Button style={{marginRight: '5px', marginTop: '5px', width: '100%'}} onClick={() =>
                            window.open("https://waze.com/ul?q=" + this.props.parkingLot.name + ", " +
                                this.props.parkingLot.address)}> Open in Waze </Button>
                    </Col>
                </Row>
            </div>
        )
    }
};