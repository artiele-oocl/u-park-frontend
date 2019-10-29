import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import {Button, TextInput} from 'react-materialize';
import * as M from "materialize-css";
import WalletMoney from "./WalletMoney";
import WalletTopUp from "./WalletTopUp";

export class WalletWrapper extends Component {

    state = {
        id: FakeAuth.isAuthenticated().id,
        name: FakeAuth.isAuthenticated().name,
        email: FakeAuth.isAuthenticated().email,
        phoneNumber: FakeAuth.isAuthenticated().phoneNumber,
        wallet: FakeAuth.isAuthenticated().wallet
    };

    constructor(props) {
        super(props);
        let userInfo = FakeAuth.isAuthenticated();
        console.log(userInfo)
    }

    walletBalance = () => {
        return this.state.wallet;
    }
    render() {
        return (
            <div>
                <WalletMoney walletAmount={this.state.wallet}/>
                <WalletTopUp />
            </div>
        )
    }
}

export default WalletWrapper
