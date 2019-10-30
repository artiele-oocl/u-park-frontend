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
                <Row>
                    <Col style={{paddingLeft: '0px'}}>
                        <p style={{fontSize: '1.5rem', fontWeight: 300, marginTop: '8px', marginBottom: '0px', position:'center'}}>
                            My Previous Transactions
                        </p>
                    </Col>
                </Row>
                <TransactionOrderList transactionOrderList={this.props.transactionOrders}/>
            </div>
        )
    }
}

export default TransactionOrderWrapper;