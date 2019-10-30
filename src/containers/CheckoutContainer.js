import {connect} from 'react-redux'
import CheckoutWrapper from "../components/Checkout/CheckoutWrapper";
import CheckoutResource from "../api/CheckoutResource";


const mapStateToProps = state => ({
    checkOut: state.checkoutResource.checkOut
});

const mapDispatchToProps = dispatch => ({
    getUserActiveTransaction: (userId) => {
        return CheckoutResource.getUserTransation(userId)
            .then(res => res.json())
            .then((transactionDetails) => {
                dispatch({
                    type: 'GET_ACTIVE_TRANSACTION',
                    payload: transactionDetails
                })
            });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutWrapper)