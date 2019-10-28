import {connect} from 'react-redux'
import LogIn from '../components/LogIn/LogIn';
import UserResource from '../api/UserResource';

const mapStateToProps = state => ({
    user: state.loginResource.user,
    isLogIn: state.loginResource.isLogIn
});

const mapDispatchToProps = dispatch => ({
    onLogin: (username, password) => {
        const userInput = {
            email: username,
            phoneNumber: username,
            password: password
        };

        UserResource.checkCredential(userInput)
            .then(res => res.json())
            .then((userInfo) => {
                dispatch({
                    type: 'LOG_IN',
                    payload: userInfo
                })
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn)
  