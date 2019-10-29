import React from "react";
import {Col, Row} from 'react-materialize';

export default class CheckoutDetails extends React.Component {

    render() {
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