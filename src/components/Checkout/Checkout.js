import React from "react";
import { Row, Col, Card, CardTitle } from 'react-materialize';
import logo from "../../logo.png";
import CheckoutDetails from "./CheckoutDetails";
import StarRatings from "react-star-ratings";


export default class Checkout extends React.Component {

    render() {
        return(
            <div>
                <Row>
                    <Col s={12}>
                        <Card
                            header={<CardTitle />}
                            actions={<CheckoutDetails checkoutDetails={this.props.checkOut} />}
                            className="blue-grey darken-1"
                        >
                            <img src={logo} alt=""/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}