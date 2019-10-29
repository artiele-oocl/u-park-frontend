import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import StarRatings from 'react-star-ratings';
import './TransactionOrder.css'

export default class TransactionOrder extends Component {
    render() {
        const { transactionOrder } = this.props;
        const transactionSummary = <div>{transactionOrder.parkingLotName}<br /><span style={{ fontSize: '11px' }}>Total: {transactionOrder.totalFee}</span></div>;
        return (
            <div>
                <Collapsible className="transaction-order-list">
                    <CollapsibleItem header={transactionSummary} >
                        <span style={{ fontSize: '12px' }}>
                            <Row>
                                <Col>Check-in:</Col>
                                <Col>{transactionOrder.checkIn}</Col>
                            </Row>                        
                            <Row>
                                <Col>Check-out:</Col>
                                <Col>{transactionOrder.checkOut}</Col>
                            </Row>                                                                                     
                            <Row>
                                <Col>Your rating:</Col>
                                <Col>
                                    <StarRatings
                                        rating={transactionOrder.starRating}
                                        starRatedColor="orange"
                                        numberOfStars={5}
                                        starDimension="12px"
                                        starSpacing="0.5px"
                                        name='rating'>

                                    </StarRatings>
                                </Col>
                            </Row>
                        </span>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
};