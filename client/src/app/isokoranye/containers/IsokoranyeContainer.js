import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import aSokozoSelector from '../selectors/aSokozoSelector';
import IsokoranyeLayout from '../components/IsokoranyeLayout/IsokoranyeLayout';

// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUserReducer.currentUser,
    ibisokozo: state.fetchIbisokozoReducer.ibisokozo,
    aSokozo: aSokozoSelector(state),
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
/* Wrap your connected component with the withRouter higher-order component, that
* in fact has the same effect and injects location as a prop */
// eslint-disable-next-line
const IsokoranyeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(IsokoranyeLayout));
export default IsokoranyeContainer;
