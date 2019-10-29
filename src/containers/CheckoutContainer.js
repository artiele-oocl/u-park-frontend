import {connect} from 'react-redux'
import CheckoutWrapper from "../components/Checkout/CheckoutWrapper";
import CheckoutResource from "../api/CheckoutResource";


const mapStateToProps = state => ({
    checkOut: state.checkoutResource.checkOut
});

const mapDispatchToProps = dispatch => ({
    getUserActiveTransaction: (userId) => {
        CheckoutResource.getUserTransation(userId)
            .then(res => res.json())
            .then((transactionDetails) => {
                dispatch({
                    type: 'GET_ACTIVE_TRANSACTION',
                    payload: transactionDetails
                })
            });
    },

    addRating: (transactionId, rating) => {
        const transaction = {id : transactionId, starRating: rating};
        CheckoutResource.patchRating(transaction) ;
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutWrapper)