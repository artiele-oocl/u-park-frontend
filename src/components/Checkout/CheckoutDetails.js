import React from "react";
import { Col, Row, Button } from 'react-materialize';
import StarRatings from 'react-star-ratings';

export default class CheckoutDetails extends React.Component {
    state = {
        name: 'Integrated Rentals, Inc.',
        address: 'Sunrise Drive Cor Edsa Extension Moa Complex, Pasay, 1300 Metro Manila',
        starRating: 3.3,
        rate: '30',
        checkIn: '2019-10-29T19:43:23',
        distance: 0.4
    }

    render() {
        const { parkingLot, transactionOrder } = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            console.log(parkingLot, transactionOrder)
            return (
                <div>
                    <Row style={{ margin: '0' }} className="white-text">
                        <Col s={6}>
                            <p>{this.state.name}</p>
                        </Col>
                        <Col s={6}>
                            <p style={{ marginBottom: '0' }}>
                                {this.state.distance} km
                            </p>
                            <p style={{ marginTop: '0' }}>
                                <StarRatings
                                    rating={this.state.starRating}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension="12px"
                                    starSpacing="0.5px"
                                    name='rating'>

                                </StarRatings>
                            </p>
                        </Col>
                    </Row>
                    <Row style={{ margin: '0', backgroundColor: 'white', padding: '20px', fontWeight: '500', fontSize: '1.2rem'}}>
                        <Row style={{ margin: '0', backgroundColor: 'white', border: '1px solid lightgrey'}}>
                            <Row style={{ padding: '10px', margin: '30px 0px' }}>
                                <span style={{ float: 'left' }}>
                                    Hourly rate
                                </span>
                                <span style={{ float: 'right' }}>
                                    ₱ {this.state.rate}.00
                                </span>
                            </Row>
                            <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white' }}>
                                <span style={{ float: 'left' }}>
                                    Park In Time
                                </span>
                                <span style={{ float: 'right' }}>
                                    {this.state.checkIn}
                                </span>
                            </Row>
                        </Row>
                        <Row style={{ margin: '0', backgroundColor: 'white', padding: '10px', textAlign: 'center', marginTop: '20%', marginBottom: '27%' }}>
                            <Button large style={{  width: '80%', fontSize: '2rem', width: '100%', textTransform: 'capitalize', backgroundColor: '#195856d4'}}>Check Out</Button>
                        </Row>
                    </Row>
                </div>
            )
        } else {
            return <div />
        }
    }
}