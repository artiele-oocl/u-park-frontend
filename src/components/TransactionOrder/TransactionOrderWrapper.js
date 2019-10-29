import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import TransactionOrderList from './TransactionOrderList';

export class TransactionOrderWrapper extends Component {

    state = {
        userInfo: ''
    };


    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        this.setState({userInfo: userInformation.id});
        this.props.getTransactionHistoryOfUser(userInformation.id);
    }

    render() {
        return (
            <div style={{display: 'flex', minHeight: '92vh', flexDirection: 'column'}} >
                <TransactionOrderList transactionOrderList={this.props.transactionOrders}/>
            </div>
        )
    }
}

export default TransactionOrderWrapper;