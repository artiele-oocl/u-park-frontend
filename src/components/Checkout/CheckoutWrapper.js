import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import Checkout from "./Checkout";

export default class CheckoutWrapper extends Component {

    performCheckout = () =>{
        if (this.props.checkOut.transactionOrder !== null) {
            this.props.performCheckOut(this.props.checkOut.transactionOrder.id);
            console.log(this.props.checkOut.transactionOrder.id)
        }
    }

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        if (!userInformation) {
            window.location.href = '/';
        }
        this.props.getUserActiveTransaction(userInformation.id);
    }

    rateAfterCheckout = (transactionId, rating) => {
        this.props.addRating(transactionId, rating);
    };

    render() {
        return (
            <div>
                <Checkout checkOut={this.props.checkOut}
                performCheckout={this.performCheckout}
                          rateAfterCheckout ={this.rateAfterCheckout}/>

            </div>
        );
    }
}