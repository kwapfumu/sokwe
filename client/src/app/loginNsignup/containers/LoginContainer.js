// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getCurrentUser from '../../isokoranye/actions/currentUserActionsCreators/currentUserActionsCreators';
import LoginForm from '../components/LoginForm/LoginForm';

// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUserReducer.currentUser,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  // return bindActionCreators(getCurrentUser, dispatch);
  return {
    getCurrentUser: (anEmail) => {
      dispatch(getCurrentUser(anEmail));
    },
  };
};
const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
export default LoginContainer;
