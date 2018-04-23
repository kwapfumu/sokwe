
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ValentinaLayout from '../components/ValentinaLayout/ValentinaLayout';
// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    valentinaMsgs: state.fetchValentinasMsgsReducer.valentinaMsgs,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch, ownProps) => {
  return { };
};
// eslint-disable-next-line max-len
const ValentinaContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ValentinaLayout));
export default ValentinaContainer;
