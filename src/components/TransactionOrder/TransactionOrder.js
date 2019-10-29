import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import StarRatings from 'react-star-ratings';
import './TransactionOrder.css';
import chevrondown from "../../chevrondown.png";

export default class TransactionOrder extends Component {

    getStarRating = (starRating) => {
        if (starRating > 0) {
            return <StarRatings
                rating={starRating}
                starRatedColor="orange"
                numberOfStars={5}
                starDimension="12px"
                starSpacing="0.5px"
                name='rating'>
            </StarRatings>
        } else {
            return <div>Not rated</div>
        }
    }

    parseDate = (date) => {
        if (date === null) {
            return null;
        } else {
            const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Date(date).toLocaleDateString('en-US', dateOptions);
        }
    }

    render() {
        const { transactionOrder } = this.props;
        const transactionSummary = <div>
            {transactionOrder.parkingLotName}<br />
            <span style={{ fontSize: '11px' }}>Total: {transactionOrder.totalFee}</span>
            <i class="chevron"><img style={{ width: '20px', height: '20px' }} src={chevrondown}></img></i>
        </div>;
        return (
            <div>
                <Collapsible className="transaction-order-list">
                    <CollapsibleItem header={transactionSummary} >
                        <span style={{ fontSize: '12px' }}>
                            <Row>
                                <Col>Check-in:</Col>
                                <Col>{this.parseDate(transactionOrder.checkIn)}</Col>
                            </Row>
                            <Row>
                                <Col>Check-out:</Col>
                                <Col>{this.parseDate(transactionOrder.checkOut)}</Col>
                            </Row>
                            <Row>
                                <Col>Your rating:</Col>
                                <Col>
                                    {this.getStarRating(transactionOrder.starRating)}
                                </Col>
                            </Row>
                        </span>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
};