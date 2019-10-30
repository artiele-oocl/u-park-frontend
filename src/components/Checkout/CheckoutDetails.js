import React from "react";
import { Col, Row } from 'react-materialize';
import StarRatings from 'react-star-ratings';
import BeforeCheckout from "./BeforeCheckout";

export default class CheckoutDetails extends React.Component {

    doCheckout = () => {
        this.props.checkOut()
    }

    rateAfterCheckout = (transactionId, rating) => {
        this.props.addRating(transactionId, rating);
    };
    
    render() {
        const {parkingLot, transactionOrder} = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            return (
                <div>
                    <Row style={{margin: '0'}} className="white-text">
                        <Col s={6}>
                            <p>{parkingLot.name}</p>

                            {/*<p style={{ marginBottom: '0' }}>*/}
                            {/*    idontknow distance? km*/}
                            {/*</p>*/}
                            <p>
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
                    <BeforeCheckout checkoutDetails={this.props.checkoutDetails}
                    checkOut={this.doCheckout}/>

                    {/*<AfterCheckout onRate={this.rateAfterCheckout}/>*/}
                </div>
            )
        } else {
            return <div/>
        }
    }
}