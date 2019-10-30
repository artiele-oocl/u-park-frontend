import {connect} from 'react-redux'
import UserResource from "../api/UserResource";
import WalletWrapper from "../components/User/WalletWrapper";

const mapStateToProps = state => ({
    user: state.profileResource.user
});

const mapDispatchToProps = dispatch => ({
    topUpWallet: (userId, amount) => {
        return UserResource.topUpWallet({id : userId, wallet: amount})
            .then(res => res.json())
            .then(res => {
                sessionStorage['u-park-user-information'] = JSON.stringify(res);
                dispatch({
                    type: 'TOP_UP_WALLET',
                    payload: res
                })
            })
    },
    getUserInformation: (userId) => {
        return UserResource.getUserById(userId)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'GET_USER_INFORMATION',
                    payload: res
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletWrapper)
