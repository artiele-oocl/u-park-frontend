import {connect} from 'react-redux'
import TransactionOrderResource from '../api/TransactionOrderResource';
import TransactionOrderWrapper from '../components/TransactionOrder/TransactionOrderWrapper';

const mapStateToProps = state => ({
    transactionOrders: state.transactionOrderResource.transactionOrders
});

const mapDispatchToProps = dispatch => ({
    getTransactionHistoryOfUser: (userId) => {
        TransactionOrderResource.getTransactionOrdersOfUser(userId)
            .then(res => res.json())
            .then(transactionOrders => {
                dispatch({
                    type: 'GET_TRANSACTION_ORDERS',
                    payload: transactionOrders
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionOrderWrapper)
