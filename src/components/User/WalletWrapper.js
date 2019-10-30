import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import WalletMoney from "./WalletMoney";
import WalletTopUp from "./WalletTopUp";

export class WalletWrapper extends Component {

    componentDidMount() {
        this.props.getUserInformation(FakeAuth.isAuthenticated().id);
    }

    addMoneyToWallet = (topUpValue) => {
        this.props.topUpWallet(this.props.user.id, topUpValue);
        this.setState({wallet: parseInt(this.props.user.wallet) + parseInt(topUpValue)})
    };

    render() {
        return (
            <div>
                <WalletMoney walletAmount={this.props.user.wallet}/>
                <WalletTopUp addTopUpValue={this.addMoneyToWallet}/>
            </div>
        )
    }
}

export default WalletWrapper
