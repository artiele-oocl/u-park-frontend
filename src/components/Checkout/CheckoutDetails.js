import React from "react";
import { Col, Row, Button } from 'react-materialize';
import StarRatings from 'react-star-ratings';
import BeforeCheckout from "./BeforeCheckout";

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
                    <BeforeCheckout checkoutDetails={this.props.checkoutDetails}/>
                </div>
            )
        } else {
            return <div />
        }
    }
}