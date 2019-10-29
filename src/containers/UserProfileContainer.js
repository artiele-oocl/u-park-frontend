import {connect} from 'react-redux'
import UserProfileWrapper from "../components/UserProfile/UserProfileWrapper";
import UserResource from "../api/UserResource";
import FakeAuth from "../FakeAuth";

const mapStateToProps = state => ({
    user: state.profileResource.user
});

const mapDispatchToProps = dispatch => ({
    patchUserProfile: (id, userInfo) => {
        console.log(id);
        console.log(userInfo);
        return UserResource.patchUserProfile(id, userInfo)
            .then(res => res.json())
            .then(res => {
                sessionStorage['u-park-user-information'] = JSON.stringify(res);
            })
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileWrapper)
