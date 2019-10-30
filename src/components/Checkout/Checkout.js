import React from "react";
import { Row, Col, Card, CardPanel } from 'react-materialize';
import logo from "../../logo.png";
import CheckoutDetails from "./CheckoutDetails";

export default class Checkout extends React.Component {
    doCheckOut = () => {
        this.props.performCheckout()
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12} style={{ paddingLeft: '0', paddingRight: '0' , borderRadius: '0'}}>
                        <Card style={{ margin: '0', border: 'none', borderRadius: '0' }}>
                            <img src={logo} alt="logo" style={{ width: '100%' }}/>
                        </Card>
                    </Col>

                    <Col s={12} style={{padding: '0', borderRadius: '0'}}>
                        <CardPanel style={{backgroundColor: '#389793', margin: '0', borderRadius: '0', padding: '0'}}>
                            <CheckoutDetails
                                checkoutDetails={this.props.checkOut}
                                checkOut={this.doCheckOut}/>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        )
    }
}