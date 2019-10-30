import React from "react";
import { Row, Button } from 'react-materialize';

export default class BeforeCheckout extends React.Component {

    doCheckOut = () => {
        this.props.checkOut();
    }

    render() {
        const { parkingLot, transactionOrder } = this.props.checkoutDetails;
        if (parkingLot != null && transactionOrder != null) {
            return (
                <Row style={{ margin: '0', backgroundColor: 'white', padding: '20px', fontWeight: '500', fontSize: '1.2rem'}}>
                    <Row style={{ margin: '0', backgroundColor: 'white', border: '1px solid lightgrey',  color: 'grey'}}>
                        <Row style={{ padding: '10px', margin: '30px 0px' }}>
                            <span style={{ float: 'left' }}>
                                Hourly rate
                            </span>
                            <span style={{ float: 'right' }}>
                                ₱ {parkingLot.rate}.00
                            </span>
                        </Row>
                        <Row style={{ paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', backgroundColor: 'white'  , color: 'grey'}}>
                            <span style={{ float: 'left' }}>
                                Park In Time
                            </span>
                            <span style={{ float: 'right' }}>
                                {this.props.parseDate(transactionOrder.checkIn)}
                            </span>
                        </Row>
                    </Row>
                    <Row style={{ backgroundColor: 'white', padding: '10px', textAlign: 'center', margin: '5% 0px 11%' }}>
                        <Button large style={{ fontSize: '2rem', width: '100%', textTransform: 'capitalize', backgroundColor: '#195856d4'}}
                        onClick = {this.doCheckOut}
                        >Check Out</Button>
                    </Row>
                </Row>
            )
        }
    }
}