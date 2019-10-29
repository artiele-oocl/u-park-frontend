import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import StarRatings from "react-star-ratings";
import FakeAuth from "../../FakeAuth";
import Checkout from "./Checkout";

export default class CheckoutWrapper extends Component {

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        this.props.getUserActiveTransaction(userInformation.id);
    }


    render() {
        return (
            <div>
                <Checkout checkOut={this.props.checkOut}/>
            </div>
        );
    }



}