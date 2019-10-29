import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
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

    addMoneyToWallet = (topUpValue) => {
        this.props.topUpWallet(this.state.id, topUpValue);
        this.setState({wallet:parseInt(this.state.wallet) + parseInt(topUpValue)})
    }

    render() {
        return (
            <div>
                <WalletMoney walletAmount={this.state.wallet}/>
                <WalletTopUp addTopUpValue={this.addMoneyToWallet}/>
            </div>
        )
    }
}

export default WalletWrapper
