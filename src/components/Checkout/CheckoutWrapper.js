import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import StarRatings from "react-star-ratings";
import FakeAuth from "../../FakeAuth";

export default class CheckoutWrapper extends Component {

    state = {
        isGeolocationAvailable: false,
        userInfo: ''
    };

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        this.props.getUserActiveTransaction(userInformation.id);
    }


    render() {
        return (
            <div>

            </div>
        );
    }



}