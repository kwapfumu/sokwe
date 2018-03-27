// Polyfills
import 'babel-polyfill';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import IbisokozoLayout from '../components/IbisokozoLayout/IbisokozoLayout';

// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    // currentUser: state.currentUser,
    ibisokozo: state.ibisokozo,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
/* Wrap your connected component with the withRouter higher-order component, that
* in fact has the same effect and injects location as a prop */
// eslint-disable-next-line
const IbisokozoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(IbisokozoLayout));
export default IbisokozoContainer;
