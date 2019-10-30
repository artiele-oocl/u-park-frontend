import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import AfterCheckout from "./AfterCheckout";
import Checkout from "./Checkout";

export default class CheckoutWrapper extends Component {

    performCheckout = () =>{
        if (this.props.checkOut.transactionOrder !== null) {
            this.props.performCheckOut();
        }
    }

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        if (!userInformation) {
            window.location.href = '/';
        }
        this.props.getUserActiveTransaction(userInformation.id);
    }



    render() {
        return (
            <div>
                <Checkout checkOut={this.props.checkOut}
                performCheckout={this.performCheckout}/>

            </div>
        );
    }
}