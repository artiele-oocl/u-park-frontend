import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import StarRatings from "react-star-ratings";
import FakeAuth from "../../FakeAuth";
import Checkout from "./Checkout";
import AfterCheckout from "./AfterCheckout";

export default class CheckoutWrapper extends Component {

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        this.props.getUserActiveTransaction(userInformation.id);
    }

    rateAfterCheckout = (transactionId , rating) => {
        this.props.addRating(transactionId,rating);
    }


    render() {
        return (
            <div>
                {/*<Checkout checkOut={this.props.checkOut}/>*/}
                          <AfterCheckout onRate={this.rateAfterCheckout}/>
            </div>
        );
    }



}