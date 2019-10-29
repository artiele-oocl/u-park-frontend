import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import AfterCheckout from "./AfterCheckout";

export default class CheckoutWrapper extends Component {

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
                <AfterCheckout onRate={this.rateAfterCheckout}/>
            </div>
        );
    }
}