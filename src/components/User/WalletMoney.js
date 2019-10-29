import React, {Component} from 'react'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export default class WalletMoney extends Component {

    render() {

        return (
                <div style={{backgroundColor:"#389793", color: "white", height:"50vh"}}>
                    <span style={{float:"right"}}><AccountBalanceWalletIcon style={{fontSize:"6em", margin:10}}/></span>
                    <h3 style={{padding:"20vh"}}>PHP {this.props.walletAmount}</h3>
                </div>
        )
    }
}
