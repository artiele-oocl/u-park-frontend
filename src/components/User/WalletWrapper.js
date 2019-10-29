import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import {Button} from 'react-materialize';

export class WalletWrapper extends Component {

    state = {
        id: FakeAuth.isAuthenticated().id,
        name: FakeAuth.isAuthenticated().name,
        email: FakeAuth.isAuthenticated().email,
        phoneNumber: FakeAuth.isAuthenticated().phoneNumber
    };

    render() {
        return (
            <div>
                <h1>sample 500Php</h1>
                <Button>Top up</Button>
            </div>
        )
    }
}

export default WalletWrapper
