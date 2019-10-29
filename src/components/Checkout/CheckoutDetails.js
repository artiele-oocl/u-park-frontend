import React from "react";
import {Col, Row} from 'react-materialize';

export default class CheckoutDetails extends React.Component {

    render() {
        // const {parkingLot, transactionOrder} = this.props.checkoutDetails;
        const checkoutDetails = this.props.checkoutDetails;
        const parking = this.props.checkoutDetails.parkingLot;
        // const newParking = JSON.stringify(parking);
        var x =JSON.parse(JSON.stringify(parking));
        console.log(x.id);
        // console.log(parking.name);
        return(
            <div>
                {
                    // console.log(this.props.checkoutDetails.transactionOrder) #389793
                }
                <Row>
                    <Col>
                        {/*<span> {transactionOrder} </span>*/}
                    </Col>
                </Row>

            </div>
        )
    }
}