import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import StarRatings from 'react-star-ratings';

export default class TransactionOrder extends Component {
    render() {
        const { transactionOrder } = this.props;
        const transactionSummary = <div>{transactionOrder.parkingLotName}<br/><span style={{ fontSize: '11px' }}>Total: {transactionOrder.totalFee}</span></div>;
        return (
            <div>
                    <Collapsible>
                        <CollapsibleItem header={transactionSummary} >
                            <span style={{ fontSize: '12px' }}> 
                            Check-in: {transactionOrder.checkIn}<br/>
                            Check-out: {transactionOrder.checkOut}<br/>
                            Your rating: 
                            <StarRatings
                            rating={transactionOrder.starRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="12px"
                            starSpacing="0.5px"
                            name='rating'>

                            </StarRatings>
                            </span>
                        </CollapsibleItem>
                    </Collapsible>

                        {/* {transactionOrder.parkingLotName}<br />

                        <span style={{ fontSize: '11px' }}>Total: {transactionOrder.totalFee}</span> */}
                        {/* {parkingLot.name}
                        <br/>
                        <span style={{fontSize: '11px'}}>{parseFloat(parkingLot.distance).toFixed(2)} km</span>
                    </Col>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        ₱{parkingLot.rate}/hr
                    </Col>
                    <br/>
                    <Col style={{float: 'right', fontSize: '11px'}}>
                        <StarRatings
                            rating={parkingLot.starRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="12px"
                            starSpacing="0.5px"
                            name='rating'>

                        </StarRatings> */}
            </div>
        )
    }
};