import React from "react";
import { Row, Col } from 'react-materialize';
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";


export default class AfterCheckout extends React.Component {
    changeRating = (newRating) => {
        this.props.onRate(this.props.checkoutDetails.transactionOrder.id, newRating);
    }


    render() {
        const { parkingLot, transactionOrder } = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            return (
                <Row style={{ margin: '0', backgroundColor: 'white', padding: '20px', fontWeight: '500', fontSize: '1.2rem' }}>
                    <Row style={{ margin: '0', backgroundColor: 'white', border: '1px solid lightgrey' }}>
                        <Row style={{ padding: '10px', margin: '30px 0px', color: 'grey' }}>
                            <span style={{ float: 'left' }}>
                                Park In Time
                            </span>
                            <span style={{ float: 'right', fontWeight: '200' }}>
                                {this.props.parseDate(transactionOrder.checkIn)}
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white', color: 'grey' }}>
                            <span style={{ float: 'left' }}>
                                Park Out Time
                            </span>
                            <span style={{ float: 'right', fontWeight: '200' }}>
                                {this.props.parseDate(transactionOrder.checkOut)}
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white' }}>
                            <span style={{ float: 'left' }}>
                                Hourly rate: ₱ {parkingLot.rate}.00/hr
                            </span>
                            <span style={{ float: 'right' }}>
                                Total: ₱ {transactionOrder.totalFee}.00
                            </span>
                        </Row>
                    </Row>
                    <Row style={{ backgroundColor: 'white', textAlign: 'center', marginBottom: '0', paddingTop: '10px' }}>
                        <Col style={{ fontSize: '2rem', width: '100%', padding: '5px' }}>
                            <Link to='/parkinglotlist'>
                                <StarRatings
                                    rating={0}
                                    starHoverColor="orange"
                                    numberOfStars={5}
                                    changeRating={this.changeRating}
                                    starDimension="35px"
                                    starSpacing="1px"
                                    name='rating'>
                                </StarRatings>
                            </Link>
                        </Col>
                    </Row>
                </Row>
            )
        }
    }
}