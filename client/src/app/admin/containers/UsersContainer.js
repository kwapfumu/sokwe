import 'babel-polyfill';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from '../components/UsersList/UsersList';

// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    // currentUser: state.currentUser,
    users: state.users,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
/* Wrap your connected component with the withRouter higher-order component, that
* in fact has the same effect and injects location as a prop */
// eslint-disable-next-line
const UsersContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList));
export default UsersContainer;
