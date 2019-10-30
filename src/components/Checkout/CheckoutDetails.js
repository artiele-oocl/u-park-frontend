import React from "react";
import { Col, Row } from 'react-materialize';
import StarRatings from 'react-star-ratings';
import BeforeCheckout from "./BeforeCheckout";

export default class CheckoutDetails extends React.Component {
    
    render() {
        const { parkingLot, transactionOrder } = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            console.log(parkingLot.address, transactionOrder)
            return (
                <div>
                    <Row style={{ margin: '0' }} className="white-text">
                        <Col s={6}>
                            <p>{parkingLot.name}</p>
                        </Col>
                        <Col s={6}>
                            <p style={{ marginBottom: '0' }}>
                                idontknow distance? km
                            </p>
                            <p style={{ marginTop: '0' }}>
                                <StarRatings
                                    rating={parkingLot.starRating}
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