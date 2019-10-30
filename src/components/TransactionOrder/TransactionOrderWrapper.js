import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import FakeAuth from "../../FakeAuth";
import TransactionOrderList from './TransactionOrderList';
import logo from "../../logo.png";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

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
            <div style={{marginLeft: '15px', marginRight: '15px', marginTop:'20px', textAlign: 'left'}}>
                <br/>
                <Row>
                    <Col style={{float: 'left'}}>
                        <img style={{width: '100px'}} src={logo} alt='logo'/>
                    </Col>
                    <Col style={{float: 'right'}}>
                        <DescriptionOutlinedIcon style={{fontSize: '5rem', color: 'grey'}}/>
                    </Col>
                </Row>
                <span style={{fontSize: '16px'}}>My Previous Transactions</span>
                <TransactionOrderList transactionOrderList={this.props.transactionOrders}/>
            </div>
        )
    }
}

export default TransactionOrderWrapper;