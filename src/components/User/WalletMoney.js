import React, {Component} from 'react'
import {Card} from 'react-materialize';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export default class WalletMoney extends Component {
    render() {
        return (
            <div>
                <Card
                    style={{backgroundColor: "#389793"}}
                    textClassName="white-text"
                >
                    <AccountBalanceWalletIcon style={{fontSize: "6em"}}/>
                    <h4>₱ {this.props.walletAmount}</h4>
                </Card>
            </div>
        )
    }
}
