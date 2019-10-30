import React from "react";
import { Row, Col } from 'react-materialize';
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";


export default class AfterCheckout extends React.Component {
    state = {
        rating: 0,
        dummy_parkintime: '2019-10-30 16:48:43',
        rate: 40,
        total: 500
    }

    changeRating = (newRating) => {
        this.props.onRate(54, newRating);
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
                                {this.state.dummy_parkintime}
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white', color: 'grey' }}>
                            <span style={{ float: 'left' }}>
                                Park In Time
                            </span>
                            <span style={{ float: 'right', fontWeight: '200' }}>
                                {this.state.dummy_parkintime}
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white' }}>
                            <span style={{ float: 'left' }}>
                                Hourly rate: ₱ {this.state.rate}.00/hr
                            </span>
                            <span style={{ float: 'right' }}>
                                Total: ₱ {this.state.total}.00
                            </span>
                        </Row>
                    </Row>
                    <Row style={{ backgroundColor: 'white', textAlign: 'center', marginBottom: '0', paddingTop: '10px' }}>
                        <Col style={{ fontSize: '2rem', width: '100%', padding: '5px' }}>
                            <Link to='/parkinglotlist'>
                                <StarRatings
                                    rating={this.state.rating}
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