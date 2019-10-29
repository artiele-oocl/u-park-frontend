import {connect} from 'react-redux'
import UserResource from "../api/UserResource";
import WalletWrapper from "../components/User/WalletWrapper";

const mapStateToProps = state => ({
    parkingLots: state.parkingLotResource.parkingLots,
    criteria: state.parkingLotResource.criteria
});

const mapDispatchToProps = dispatch => ({
    topUpWallet: (userId, amount) => {
        return UserResource.topUpWallet({id : userId, wallet: amount})
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'TOP_UP_WALLET',
                    payload: res
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletWrapper)
