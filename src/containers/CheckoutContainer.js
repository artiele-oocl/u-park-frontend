import {connect} from 'react-redux'
import CheckoutWrapper from "../components/Checkout/CheckoutWrapper";
import CheckoutResource from "../api/CheckoutResource";

const mapStateToProps = state => ({
    activeTransaction: state.transactionResource.activeTransaction
});

const mapDispatchToProps = dispatch => ({
    getUserActiveTransaction: (userId) => {
        CheckoutResource.getUserTransation(userId)
            .then(res => console.log(res));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutWrapper)
