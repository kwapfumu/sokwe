import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};
const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
export default LoginContainer;
