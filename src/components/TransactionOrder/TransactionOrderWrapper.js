import React, {Component} from 'react';
import {Row} from 'react-materialize';
import FakeAuth from "../../FakeAuth";
import TransactionOrderList from './TransactionOrderList';
import logo from "../../logo.png";

export class TransactionOrderWrapper extends Component {

    state = {
        userInfo: ''
    };

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        if (!userInformation) {
            window.location.href = '/';
        }
        this.setState({userInfo: userInformation.id});
        this.props.getTransactionHistoryOfUser(userInformation.id);
    }

    render() {
        return (
            <div style={{
                marginLeft: '1rem',
                marginRight: '1rem',
                display: 'flex',
                minHeight: '92vh',
                flexDirection: 'column',
                textAlign: 'left'
            }}>
                <br/>
                <Row>
                    <img style={{width: '120px', height: '70px'}} src={logo} alt='logo'/>
                </Row>
                <span style={{fontSize: '16px'}}>My Previous Transactions</span>
                <TransactionOrderList transactionOrderList={this.props.transactionOrders}/>
            </div>
        )
    }
}

export default TransactionOrderWrapper;