import { connect } from 'react-redux'
import RegisterWrapper from '../components/Register/RegisterWrapper';
import UserResource from '../api/UserResource';

const mapStateToProps = state => ({
  users: state.registerResource.users
});

const mapDispatchToProps =  dispatch => ({
  createUser: (newUser) => {
      UserResource.createUser(newUser)
  },

  getAllUsers: () => {
    UserResource.getAll()
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'REFRESH',
        payload: res
      })
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterWrapper)
