import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SokweAppLayout from './SokweAppLayout';
// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    // currentUser: state.currentUserReducer.currentUser,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return { };
};
const SokweAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SokweAppLayout));
export default SokweAppContainer;
