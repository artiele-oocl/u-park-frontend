import React from "react";
import { Row, Button } from 'react-materialize';

export default class BeforeCheckout extends React.Component {

    doCheckOut = () => {
        this.props.checkOut();
    }

    render() {
        const { parkingLot, transactionOrder } = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            console.log(parkingLot, transactionOrder)
            return (
                <Row style={{ margin: '0', backgroundColor: 'white', padding: '20px', fontWeight: '500', fontSize: '1.2rem'}}>
                    <Row style={{ margin: '0', backgroundColor: 'white', border: '1px solid lightgrey'}}>
                        <Row style={{ padding: '10px', margin: '30px 0px' }}>
                            <span style={{ float: 'left' }}>
                                Hourly rate
                            </span>
                            <span style={{ float: 'right' }}>
                                ₱ {parkingLot.rate}.00
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white' }}>
                            <span style={{ float: 'left' }}>
                                Park In Time
                            </span>
                            <span style={{ float: 'right' }}>
                                {transactionOrder.checkIn}
                            </span>
                        </Row>
                    </Row>
                    <Row style={{ margin: '0', backgroundColor: 'white', padding: '10px', textAlign: 'center', marginTop: '20%', marginBottom: '27%' }}>
                        <Button large style={{ fontSize: '2rem', width: '100%', textTransform: 'capitalize', backgroundColor: '#195856d4'}}
                        onClick = {this.doCheckOut}
                        >Check Out</Button>
                    </Row>
                </Row>
            )
        }
    }
}