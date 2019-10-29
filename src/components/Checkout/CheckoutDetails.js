import React from "react";
import {Col, Row} from 'react-materialize';

export default class CheckoutDetails extends React.Component {
    state = {
        
    }

    render() {
        const {parkingLot, transactionOrder} = this.props.checkoutDetails;
        if(parkingLot != null && transactionOrder != null){
            console.log(parkingLot.name);
            console.log(parkingLot.address);
            console.log(parkingLot.rate);
            console.log(parkingLot.starRating);
            console.log(transactionOrder.checkIn);

            const {name, address, starRating} = parkingLot;
            const rate = parkingLot.rate;
        }
        return(
            <div>
                <Row>
                    <Col>
                        {/*<span> {transactionOrder} </span>*/}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Rate: {rate}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*<span> {transactionOrder} </span>*/}
                    </Col>
                </Row>
            </div>
        )
    }
}